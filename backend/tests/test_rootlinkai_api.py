"""Backend API tests for RootlinkAI: inquiries + newsletter."""
import os
import time
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://ai-for-service-pros.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- health ----------
class TestHealth:
    def test_root(self, session):
        r = session.get(f"{API}/")
        assert r.status_code == 200
        assert "message" in r.json()


# ---------- inquiries ----------
class TestInquiries:
    def test_create_inquiry_valid(self, session):
        payload = {
            "name": "TEST_Udit",
            "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
            "whatsapp": "+91 98765 43210",
            "business_type": "Consultant",
            "needs": "Need help automating client intake",
            "tools": "Notion, Calendly",
        }
        r = session.post(f"{API}/inquiries", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str) and len(data["id"]) > 0
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["whatsapp"] == payload["whatsapp"]
        assert data["business_type"] == payload["business_type"]
        assert data["needs"] == payload["needs"]
        assert data["tools"] == payload["tools"]
        assert "_id" not in data
        assert "created_at" in data

        # Persistence check via GET
        time.sleep(0.3)
        r2 = session.get(f"{API}/inquiries")
        assert r2.status_code == 200
        rows = r2.json()
        assert isinstance(rows, list)
        # No mongo _id leakage
        for row in rows:
            assert "_id" not in row
        # Should find our inserted record
        match = [row for row in rows if row.get("id") == data["id"]]
        assert len(match) == 1
        assert match[0]["email"] == payload["email"]

    def test_create_inquiry_no_tools(self, session):
        payload = {
            "name": "TEST_NoTools",
            "email": f"test_{uuid.uuid4().hex[:8]}@example.com",
            "whatsapp": "+91 99999 00000",
            "business_type": "Coach",
            "needs": "Just testing optional tools",
        }
        r = session.post(f"{API}/inquiries", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["tools"] == ""

    def test_create_inquiry_invalid_email(self, session):
        payload = {
            "name": "TEST_BadEmail",
            "email": "not-an-email",
            "whatsapp": "+91 99999 00000",
            "business_type": "Coach",
            "needs": "Bad email",
        }
        r = session.post(f"{API}/inquiries", json=payload)
        assert r.status_code == 422

    def test_create_inquiry_missing_fields(self, session):
        payload = {"name": "TEST_Incomplete", "email": "x@y.com"}
        r = session.post(f"{API}/inquiries", json=payload)
        assert r.status_code == 422

    def test_create_inquiry_empty_name(self, session):
        payload = {
            "name": "",
            "email": "x@y.com",
            "whatsapp": "+91 99999 00000",
            "business_type": "Coach",
            "needs": "Need help",
        }
        r = session.post(f"{API}/inquiries", json=payload)
        assert r.status_code == 422

    def test_list_inquiries_no_id_leak(self, session):
        r = session.get(f"{API}/inquiries")
        assert r.status_code == 200
        rows = r.json()
        assert isinstance(rows, list)
        for row in rows:
            assert "_id" not in row


# ---------- newsletter ----------
class TestNewsletter:
    def test_subscribe_and_duplicate(self, session):
        email = f"test_news_{uuid.uuid4().hex[:8]}@example.com"
        r1 = session.post(f"{API}/newsletter", json={"email": email})
        assert r1.status_code == 200, r1.text
        assert r1.json()["status"] == "subscribed"
        assert r1.json()["email"] == email.lower()

        # Duplicate (same email)
        r2 = session.post(f"{API}/newsletter", json={"email": email})
        assert r2.status_code == 200
        assert r2.json()["status"] == "already_subscribed"

        # Duplicate via uppercase variant -> lowercased and recognized
        r3 = session.post(f"{API}/newsletter", json={"email": email.upper()})
        assert r3.status_code == 200
        assert r3.json()["status"] == "already_subscribed"

    def test_subscribe_invalid_email(self, session):
        r = session.post(f"{API}/newsletter", json={"email": "not-an-email"})
        assert r.status_code == 422

    def test_newsletter_count_is_int(self, session):
        r = session.get(f"{API}/newsletter/count")
        assert r.status_code == 200
        data = r.json()
        assert "count" in data
        assert isinstance(data["count"], int)
        assert data["count"] >= 0

    def test_newsletter_count_increments(self, session):
        before = session.get(f"{API}/newsletter/count").json()["count"]
        email = f"test_inc_{uuid.uuid4().hex[:8]}@example.com"
        sub = session.post(f"{API}/newsletter", json={"email": email})
        assert sub.status_code == 200 and sub.json()["status"] == "subscribed"
        after = session.get(f"{API}/newsletter/count").json()["count"]
        assert after == before + 1

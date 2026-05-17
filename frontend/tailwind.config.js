/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            colors: {
                paper: '#FAF7F2',
                ink: '#141210',
                moss: '#1F3D2F',
                terra: '#C76E3F',
                muted: '#6B6660',
                hairline: '#E5E0D8',
                tint: '#FAF1EA',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))'
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            fontFamily: {
                serif: ['Fraunces', 'Instrument Serif', 'ui-serif', 'Georgia', 'serif'],
                sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
            },
            maxWidth: {
                content: '1100px'
            },
            keyframes: {
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(8px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'draw-line': {
                    '0%': { strokeDashoffset: '120' },
                    '100%': { strokeDashoffset: '0' }
                }
            },
            animation: {
                'fade-up': 'fade-up 0.6s ease-out forwards',
                'draw-line': 'draw-line 1.2s ease-out forwards'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};

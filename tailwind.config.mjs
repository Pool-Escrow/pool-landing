import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            backgroundImage: {
                cta: 'linear-gradient(180deg, #36a0f7, #1364da)',
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
                mini: 'var(--border-radius-mini)',
            },
            boxShadow: {
                'panel': '0px -2px 22.6px 0px rgba(79, 79, 79, 0.25)',
                'button': '0px 1.75px 0px 0px rgba(255, 255, 255, 0.25) inset',
                'button-push': '0px -1.75px 0px 0px rgba(255, 255, 255, 0.25) inset',
            },
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                panel: {
                    DEFAULT: 'hsl(var(--panel))',
                },
            },
            fontFamily: {
                body: ['Inter', 'Inter-fallback', ...defaultTheme.fontFamily.sans],
                body: ['Raleway', 'Raleway Variable', ...defaultTheme.fontFamily.sans],
                logo: ['Raleway', 'Raleway Variable', ...defaultTheme.fontFamily.sans],
            },
            height: {
                'top-bar': 'var(--top-bar-height)',
                'bottom-bar': 'var(--bottom-bar-height)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
                'shine-pulse': {
                    '0%': {
                        'background-position': '0% 0%',
                    },
                    '50%': {
                        'background-position': '100% 100%',
                    },
                    'to': {
                        'background-position': '0% 0%',
                    },
                },
            },
            padding: {
                'top-bar-h': 'var(--top-bar-height)',
                'bottom-bar-h': 'var(--bottom-bar-height)',
            },
            textShadow: {
                inner: '0 3px 4px #fff, 0 0 0 #151515, 0px 3px 4px #fff',
            },
            screens: {
                'custom': '930px',
                'flamingo': '1328px'
            },
            width: {
                100: '25rem',
                104: '26rem',
                108: '27rem',
                112: '28rem',
                116: '29rem',
                120: '30rem',
                124: '31rem',
                128: '32rem',
                256: '64rem',
            },
        },
    },
    plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '3rem',
                lg: '6rem',
                xl: '8rem',
                '2xl': '14rem',
            },
        },
        extend: {
            colors: {
                'base-color': '#818cf8',
                'second-color': '#FCD980',
            },
            borderRadius: {
                custom: 'var(--rounded)',
            },
        },
    },
    plugins: [],
};

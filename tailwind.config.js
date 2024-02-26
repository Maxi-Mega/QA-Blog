/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './views/**/*.{html,js}',
        './components/**/*.{html,js}',
    ],
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
}


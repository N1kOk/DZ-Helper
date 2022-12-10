/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
        './src/App.vue',
    ],
    theme: {
        extend: {
            colors: {
                'blue': '#149dcc',
                'green': '#46d11b',
                'yellow': '#f7ed4a',
                'aqua': '#0ff',
            },
            flex: {
                '2': '1 1 50%',
                '3': '1 1 33.33%',
                '4': '1 1 25%',
            },
        },
        screens: {
            'lg': '1100px',
        },
    },
    plugins: [],
}

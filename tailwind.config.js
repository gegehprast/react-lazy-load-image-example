/* eslint-disable no-undef */
module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: ['./components/**/*.jsx', './pages/**/*.jsx'],
    },
    theme: {
        extend: {},
    },
    variants: {},
    plugins: [],
}

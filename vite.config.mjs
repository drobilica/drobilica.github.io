import tailwindcss from '@tailwindcss/vite'

export default {
    base: process.env.NODE_ENV === 'drobilica' ? '/vanilla/' : '/',
    plugins: [
        tailwindcss(),
      ],
}
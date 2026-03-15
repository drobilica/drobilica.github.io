import tailwindcss from '@tailwindcss/vite'

export default {
  base: '/',
  plugins: [tailwindcss()],
  server: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; img-src 'self'; frame-ancestors 'none';",
      'X-Frame-Options': 'DENY',
      'Strict-Transport-Security': 'max-age=31536000; includeSubDomains',
    },
  },
}

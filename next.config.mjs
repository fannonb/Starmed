/** @type {import('next').NextConfig} */
const nextConfig = {
  // Plain static files for cPanel/Apache: `next build` writes the site to ./out.
  // Locale redirects live in public/.htaccess; forms post to the PHP handlers in public/api.
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    // The root layout is app/[locale]/layout.tsx, so unmatched URLs use app/global-not-found.tsx.
    globalNotFound: true,
  },
}

export default nextConfig

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "standalone"
}

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
})

const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
]

module.exports = {
  ...withBundleAnalyzer({}),
  ...nextConfig,
  images: {
    domains: ["dummyimage.com"],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: "/:path*",
        headers: securityHeaders,
      },
    ]
  },
}

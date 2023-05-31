
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  optimizeFonts:true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
        
      },
      {
        protocol: "https",
        hostname: 'flagsapi.com'
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org"
        
      },
      {
        protocol: "https",
        hostname: "img.freepik.com"
        
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com"
        
      },
      {
        protocol: "https",
        hostname: "preview.redd.it"
        
      },
      {
        protocol: "https",
        hostname: "media.cntraveler.com"
        
      },
    ],
    minimumCacheTTL: 15000000,
  }
}

module.exports = nextConfig
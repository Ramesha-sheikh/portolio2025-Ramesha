
/** @type {import('next').NextConfig} */
module.exports = {
  turbopack: {
    root: process.cwd(),
  },

  async redirects() {
    return [
      {
        source: "/admin",
        destination: "https://app.forestry.io/login",
        permanent: true,
        basePath: false,
      },
    ];
  },

  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "html"],
  reactStrictMode: true,
  trailingSlash: false,

  images: {
    // ❌ REMOVE THIS (deprecated)
    // domains: ["res.cloudinary.com", "cdn.openai.com", "n8n.io"],

    // ✔ NEW, CORRECT CONFIG
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.openai.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "n8n.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        pathname: "/**",
      },
    ],
  },

  compiler: {
    removeConsole: true,
  },
};





























// /** @type {import('next').NextConfig} */
// module.exports = {
//   turbopack: {
//     root: process.cwd(),
//   },
//   async redirects() {
//     return [
//       {
//         source: "/admin",
//         destination: "https://app.forestry.io/login",
//         permanent: true,
//         basePath: false,
//       },
//     ];
//   },
//   // Append the default value with md extensions
//   pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx", "html"],
//   reactStrictMode: true,
//   trailingSlash: false,
//   images: {
//     domains: ["res.cloudinary.com", "cdn.openai.com", "n8n.io"],
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
//         port: "",
//         pathname: "/**", // Allow all paths under this hostname
//       },
//     ],
//   },
//   compiler: {
//     removeConsole: true,
//   },
// };
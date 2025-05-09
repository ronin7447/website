import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    return [
      {
        source: '/insights/script.js',
        destination: 'https://cloud.umami.is/script.js',
      },
      // {
      //   source: '/insights/api/send', // Adjust if Umami uses a different endpoint
      //   destination: 'https://cloud.umami.is/api/send', // Adjust if Umami uses a different endpoint
      // },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Netlify-Vary",
            value: "query=_rsc",
          },
        ],
      },
    ];
  },
};

export default nextConfig;

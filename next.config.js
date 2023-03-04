/** @type {import('next').NextConfig} */

const withImages = require('next-images');

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    disableStaticImages: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

// module.exports = nextConfig;

module.exports = withImages({
  webpack(config, options) {
    return config;
  },
  ...nextConfig,
});

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    keyframes: {
      heart: {
        '0%': {
          transform: 'scale(0.95)',
        },

        '5%': {
          transform: 'scale(1.1)',
        },

        '39%': {
          transform: 'scale(0.85)',
        },

        '45%': {
          transform: 'scale(1)',
        },

        '60%': {
          transform: 'scale(0.95)',
        },

        '100%': {
          transform: 'scale(0.9)',
        },
      },
    },
  },
};

module.exports = nextConfig;

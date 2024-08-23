export default {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
          port: '', // leave empty if no specific port is required
          pathname: '/demos/**', // Adjust pattern to match URL structure
        },
        {
          protocol: 'https',
          hostname: 'imgtr.ee',
          port: '', // leave empty if no specific port is required
          pathname: '/images/**', // Adjust pattern to match URL structure
        },
      ],
    },
  };
  
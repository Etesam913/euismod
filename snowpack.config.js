/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
      // directory name: 'build directory'
      public: '/',
      src: '/dist',
  },
  plugins: [
      '@snowpack/plugin-react-refresh'
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    // "bundle": true,
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};

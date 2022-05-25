export default {
  dev: {
    '/api': {
      target: 'http://jsonplaceholder.typicode.com/',
      changeOrigin: true,
      patchRewrite: { '^/api': '' },
    },
  },
  test: {},
};

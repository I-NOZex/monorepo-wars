module.exports = {
  projects: ['apps/*', 'packages/*'],
  pipeline: {
    build: ['^build'],
    test: ['build'],
    lint: ['eslint', 'prettier'],
  },
  npmClient: 'yarn',
};

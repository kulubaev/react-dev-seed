module.exports = {
  collectCoverageFrom: ['**/src/**/*.js'],
  coverageReporters: ['lcov'],
  moduleNameMapper: {
    '\\.(css||scss)$': 'identity-obj-proxy'
  }
};

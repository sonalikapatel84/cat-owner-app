module.exports = {
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom', // Use 'node' if you're testing server-side code
  transformIgnorePatterns: [
    '/node_modules/(?!(axios|other-package-to-transform)/)',
  ],
}

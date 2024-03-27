/* eslint-disable no-undef */
module.exports = {
  testEnvironment: "jest-environment-jsdom",
  setupFiles: ["./jest.setup.js"],
  verbose: true,
    moduleNameMapper: {
      "\\.(css|scss)$": "identity-obj-proxy",
      "^../styled-components/(.*)$": "<rootDir>/src/styled-components/$1",
      "\\.(jpg|jpeg|png|gif|svg)$": "<rootDir>/tests/__mocks__/fileMock.js",
    },
};
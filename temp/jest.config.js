const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/'],
  testMatch: [
    "/src/**/*.(test).{js,jsx,ts,tsx}",
    "/src/**/?(*.)(spec|test).{js,jsx,ts,tsx}"
  ],
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  moduleDirectories: ["node_modules", "src"],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: 'coverage/my-app',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>'
  })
};
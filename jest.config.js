/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testTimeout: 40000,
  testMatch: ['**/HW22/tests/*.spec.ts']
};
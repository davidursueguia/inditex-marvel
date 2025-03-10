/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom', // Esencial para manejar componentes React
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'], // 👈 IMPORTANTE
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  }
};

import { pathsToModuleNameMapper } from 'ts-jest/utils'

export default {
  bail: true,
  clearMocks: true,
  coverageProvider: 'v8',
  collectCoverage: true,
  collectCoverageFrom: ['<rootDir>/src/modules/**/services/*.ts'],
  coverageDirectory: 'coverage',
  coverageReporters: ['text-summary', 'lcov'],
  preset: 'ts-jest',
  testMatch: ['**/*.spec.ts'],
  moduleNameMapper: pathsToModuleNameMapper(
    {
      '@modules/*': ['modules/*'],
      '@config/*': ['config/*'],
      '@shared/*': ['shared/*'],
    },
    {
      prefix: '<rootDir>/src/',
    }
  ),
  setupFiles: ['dotenv/config'],
}

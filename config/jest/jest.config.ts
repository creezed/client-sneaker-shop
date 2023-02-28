import type { Config } from 'jest';

const config: Config = {
  rootDir: '../../',

  coveragePathIgnorePatterns: ['<rootDir>/build/', '<rootDir>/node_modules/'],

  clearMocks: true,

  moduleDirectories: ['node_modules', 'src'],

  moduleFileExtensions: ['ts', 'tsx', 'js'],

  setupFilesAfterEnv: ['<rootDir>/config/jest/jest.setup.ts'],

  testMatch: ['<rootDir>/src/**/*(*.)@(spec|test).[tj]s?(x)'],

  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  globals: {
    __IS_DEV__: true,
    __API__: '',
    __PROJECT__: 'jest',
  },

  displayName: {
    name: 'CLIENT',
    color: 'blue',
  },

  reporters: [
    'default',
    [
      'jest-html-reporters',
      {
        publicPath: '<rootDir>/reports/unit',
        filename: 'report.html',
        //openReport: true,
        inlineSource: true,
      },
    ],
  ],
  testEnvironment: 'jsdom',
};

export default config;

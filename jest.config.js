module.exports = {
  collectCoverage: true,
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  testPathIgnorePatterns: ['<rootDir>/.next', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.js'],
  setupFiles: ['<rootDir>/jest/setEnvVars.js'],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleDirectories: ['node_modules', '<rootDir>', '<rootDir>/src/'],
  transformIgnorePatterns: ['node_modules'],
  transform: {
    '^.+\\.(js|ts|tsx)$': [
      `babel-jest`,
      {
        presets: [`next/babel`],
        plugins: [`babel-plugin-dynamic-import-node`],
      },
    ],
  },

  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|ico|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(scss|sass|css|less)$': 'identity-obj-proxy',
    // The order matters from this point
    '^@/public/(.*)': '<rootDir>/public/$1',
    '^@/components/(.*)': '<rootDir>/src/components/$1',
    '^@/sections/(.*)': '<rootDir>/src/components/Sections/$1',
    '^@/icons/(.*)': '<rootDir>/src/components/Icons/$1',
    '^@/logos/(.*)': '<rootDir>/src/components/Logos/$1',
    '^@/(.*)': '<rootDir>/src/$1',
  },
};

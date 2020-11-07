module.exports = {
    'collectCoverage': true,
    'collectCoverageFrom': [
        '**/src/**/*.{js,jsx}',
        '!**/node_modules/**',
        '!**/coverage/**'
    ],
    'transform': {
        '^.+\\.(js|jsx)$': 'babel-jest'
    },
    'testPathIgnorePatterns': ['/node_modules/'],
    'moduleNameMapper': {
        '\\.(css)$': '<rootDir>/mockdata/styleMock.js',
        '\\.(png|svg)$': '<rootDir>/mockdata/styleMock.js'
    },
    'setupFilesAfterEnv': ['<rootDir>/enzyme.config.js'],
    'resolver': 'jest-directory-named-resolver'
};

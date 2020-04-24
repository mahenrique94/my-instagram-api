module.exports = {
    bail: true,
    clearMocks: true,
    collectCoverage: true,
    collectCoverageFrom: ['./src/**/*.js', '!**/node_modules/**'],
    coverageDirectory: 'coverage',
    coveragePathIgnorePatterns: ['/coverage/', '/node_modules/'],
    coverageReporters: ['html', 'json'],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0,
        },
    },
    errorOnDeprecated: true,
    globals: {},
    moduleDirectories: ['node_modules'],
    moduleFileExtensions: ['js'],
    notify: false,
    resetMocks: true,
    resetModules: true,
    setupFiles: [],
    testEnvironment: 'node',
    testMatch: ['<rootDir>/src/**/__e2e__/**/*(e2e).js', '<rootDir>/src/**/?(*.)(e2e).js'],
    testPathIgnorePatterns: ['/coverage/', '/node_modules/'],
    testURL: 'http://localhost:8080/v1/api/',
    transform: {},
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|ts)$'],
    verbose: true,
}

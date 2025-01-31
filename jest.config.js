module.exports = {
  preset: "ts-jest",
  coverageDirectory: "coverage",
  coverageReporters: ["html", "lcov", "text"],
  collectCoverageFrom: ["packages/*/src/**/*.ts", "!packages/grunt-purgecss/**/*.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "json"],
  moduleNameMapper: {
    "^purgecss$": "<rootDir>/packages/purgecss/src",
    "^@fullhuman/purgecss-from-html$": "<rootDir>/packages/purgecss-from-html/src",
  },
  rootDir: __dirname,
  testMatch: ["<rootDir>/packages/**/__tests__/**/*test.ts"],
};

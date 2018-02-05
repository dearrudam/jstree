// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    es6: true,
    browser: true
  },
  extends: "eslint:recommended",
  // required to lint *.vue files
  plugins: ["html"],
  // add your custom rules here
  rules: {
    // allow console.log
    "no-console": 0,
    // allow paren-less arrow functions
    "arrow-parens": 0,
    // allow async-await
    "generator-star-spacing": 0,
    // allow debugger during development
    "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0
  }
};

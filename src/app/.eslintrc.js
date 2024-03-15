
module.exports = {
    parserOptions: {
        ecmaVersion: 8,
        sourceType: "module"
    },
    env: {
      node: true,
      "es6": true
    },
    extends: ["plugin:react/recommended"],
    rules: {
      quotes: ["error", "double"],
      "react/react-in-jsx-scope": "off"
      
      // Add any other ESLint rules you want to enforce
    }
  };
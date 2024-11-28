const eslintPluginReact = require('eslint-plugin-react');

module.exports = [
  {
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: {
        React: 'writable',
      },
    },
    plugins: {
      react: eslintPluginReact,
    },
    rules: {
      'react/prop-types': 'off',
      'no-console': 'off',
      'react/jsx-uses-react': 'error',
    },
  },
];

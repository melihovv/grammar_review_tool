module.exports = {
  extends: 'standard',
  plugins: [
    'standard',
    'promise',
    'html'
  ],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single', {allowTemplateLiterals: true}],
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': [
      'error',
      {'anonymous': 'always', 'named': 'never'}
    ],
  },
};

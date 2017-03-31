module.exports = {
  extends: 'standard',
  'parser': 'babel-eslint',
  plugins: [
    'standard',
    'promise',
    'html'
  ],
  rules: {
    quotes: ['error', 'single', {allowTemplateLiterals: true}],
    'comma-dangle': ['error', 'always-multiline'],
    'operator-linebreak': ['error', 'before'],
    'space-before-function-paren': [
      'error',
      {'anonymous': 'always', 'named': 'never'}
    ],
  },
  "globals": {
    "Laravel": false,
    "Messenger": false,
    "$": false,
    "Parser": false,
    "finder": false
  }
}

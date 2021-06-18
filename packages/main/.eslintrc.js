module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'indent': [2, 2], // 缩进风格
    'no-control-regex': 'off',
    'no-useless-escape0': 'off',
    'comma-spacing': 0, // 逗号前后空格
    'switch-colon-spacing': 0, // 冒号前后空格
    'object-curly-spacing': 0, // 大括号必须有空格
    'jsx-quotes': 0 , // json字符串必须用单引号
    'no-trailing-spaces': 0 // 行尾不能有空格
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}

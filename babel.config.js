// babel.config.js
// used for testing ts files with jest
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: '12' } }],
    '@babel/preset-typescript',
  ],
};

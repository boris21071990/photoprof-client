module.exports = (env) => {
  if (env.production) {
    return require('./webpack.production');
  } else {
    return require('./webpack.development');
  }
};

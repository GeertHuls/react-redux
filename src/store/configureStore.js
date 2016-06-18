if (process.env.NODE_ENV === 'production') {
  // dynamic imports won't work in ES6, hence require is used instead
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}

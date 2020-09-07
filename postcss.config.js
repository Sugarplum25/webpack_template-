// module.exports = {
//   plugins: [
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
{
  preset: [
        'default', {
          discardComments: {
            removeAll: true,
          }
        }
  ]
}
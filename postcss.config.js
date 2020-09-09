const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

module.exports = {
    plugins: [
        require('postcss-focus'),
        require('autoprefixer'),
        require('cssnano')
    ]
}
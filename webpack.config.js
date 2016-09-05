module.exports = {
  entry: {
    'index-browser-bundle': './public/js/index.js',
    'portfolio-browser-bundle': './public/js/portfolio.js',
    'resume-browser-bundle': './public/js/resume.js'
  },
  output: {
    filename: './public/js/[name].js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
    ]
  }
};

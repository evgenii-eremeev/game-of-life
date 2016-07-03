module.exports = {

  entry: "./app.js",

  output: {
    path: __dirname,
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader?presets[]=es2015&presets[]=react']
      },
      {
        test: /\.css$/,
        // css-loader responsible for css modules,
        // modules quiry parameter we need to be able to import css in javascript
        loader: 'style-loader!css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]'
      },
    ]
  },
};

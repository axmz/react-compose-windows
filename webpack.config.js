const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/main.js',
   output: {
      path: path.join(__dirname, '/build'),
      filename: 'index.js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            }
         }
      ]
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html'
      })
   ],
   resolve: {
      extensions: ['.js', '.jsx', '.scss']
  }
}
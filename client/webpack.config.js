const path = require('path');

module.exports = {
  entry: './src/index.jsx', // Điểm vào là src/index.jsx
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)$/, // Xử lý file .jsx và .js
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/, // Xử lý file CSS (nếu dùng)
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: path.join(__dirname, 'public'), 
    port: 8080, 
  },
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const packageJson = require("./package.json");
const { ModuleFederationPlugin } = require("webpack").container;

const remotes = {
  Host1: "host1@http://localhost:3001/remoteEntry.js",
  Host2: "host2@http://localhost:3002/remoteEntry.js",
}

const sharedConfig = {
  react: {
    singleton: true,
    requiredVersion: packageJson.dependencies.react,
    eager: true
  },
  "react-dom": {
    singleton: true,
    requiredVersion: packageJson.dependencies["react-dom"],
    eager: true
  },
};


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets:['@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new ModuleFederationPlugin({
      shared: sharedConfig,
      remotes
    })
  ],
  devServer: {
    port: 3000,
    hot: true
  }
};

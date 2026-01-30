const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require("./package.json");

const exposes = {
  "./HelloWorld": "./src/components/HelloWorld/HelloWorld",
};

const sharedConfig = {
  react: {
    singleton: true,
    requiredVersion: packageJson.peerDependencies.react,
    strictVersion: false,
  },
  "react-dom": {
    singleton: true,
    requiredVersion: packageJson.peerDependencies["react-dom"],
    strictVersion: false,
  },
};

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-react",
                {
                  runtime: "automatic", // Add this
                },
              ],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "host2",
      filename: "remoteEntry.js",
      exposes,
      shared: sharedConfig,
    }),
  ],
  devServer: {
    port: 3002,
    hot: true,
  },
};

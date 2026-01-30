const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const packageJson = require("./package.json");

const exposes = {
  "./HelloWorld": "./src/components/HelloWorld/HelloWorld",
};

const remotes = {
  Host4: "host4@http://localhost:3004/remoteEntry.js",
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
                  runtime: "automatic",
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
      remotes,
      shared: sharedConfig,
    }),
  ],
  devServer: {
    port: 3002,
    hot: true,
  },
};

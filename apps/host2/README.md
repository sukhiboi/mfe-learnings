# React Hello World - Minimal Setup

A super simple React + Webpack 5 project with minimal dependencies.

## Setup

```bash
npm install
```

## Development

```bash
npm start
```

Open http://localhost:3000 in your browser.

## Build

```bash
npm run build
```

The production build will be in the `dist` folder.

## Project Structure

```
react-hello-world/
├── src/
│   ├── index.html
│   ├── index.js
│   └── App.js
├── webpack.config.js
└── package.json
```

## Dependencies

- **react** & **react-dom**: The React library
- **webpack**: Module bundler
- **babel-loader** & **@babel/preset-react**: To transform JSX
- **html-webpack-plugin**: Generates HTML file
- **webpack-dev-server**: Development server with hot reload

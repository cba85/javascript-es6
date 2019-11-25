# ES6 with Webpack and Babel

## Webpack

```
$ npx webpack assets/js/app.js dist/app.js
```

### Configuration

```
$ npm install --save-dev @babel/core @babel/cli @babel/preset-env
// Loaders
$ npm install -D babel-loader @babel/core @babel/preset-env webpack
```

### Transpiling

```
$ npx webpack --watch
```

### Hot reload

```
$ npx webpack-dev-server
```

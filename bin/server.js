const path = require('path'),
  express = require('express'),
  webpack = require('webpack'),
  webpackConfig = require('../webpack.config.js'),
  middlewareDev = require('webpack-dev-middleware'),
  middlewareHot = require('webpack-hot-middleware'),
  fs = require('fs'),
  app = express(),
  port = process.env.PORT || 4200;

app.listen(port, () => console.log(`Listening on port ${port}`));
fs.writeFile(`${path.resolve(__dirname, path.basename(__filename, '.js'))}.pid`, process.pid, err => {
  if (err) console.log(err);
});
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

let compiler = webpack(webpackConfig);
app.use(
  middlewareDev(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
  })
);
app.use(middlewareHot(compiler));
app.use(express.static(path.resolve(__dirname, '../dist')));

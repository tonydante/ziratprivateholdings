import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import logger from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import expressValidator from 'express-validator';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import routes from './routes';

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 9000;
const app = express();
const configDB = require('./config/database');
const isProd = process.env.NODE_ENV === 'production';
if (isProd) {
  mongoose.connect(configDB.url_production,  { useMongoClient: true }); // connect to our production database
} else if (process.env.NODE_ENV === 'test') {
  mongoose.connect(configDB.url_test,  { useMongoClient: true }); // connect to our test database
} else {
  mongoose.connect(configDB.url,  { useMongoClient: true });
}

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(expressValidator());
app.use(express.static(__dirname + './../views'));
app.use(express.static(__dirname + './../public'));
app.use('/api/v1', routes);
app.get('/zohoverify/verifyforzoho.html', (req, res) => {
  res.render('zohoverify/verifyforzoho.html')
})
if (process.env.NODE_ENV === 'development') {
  const devConfig = require('../webpack.config.babel');
  const compiler = webpack(devConfig);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: devConfig.output.publicPath,
    open: false
  }));
  app.use(webpackHotMiddleware(compiler));
}


app.get('/', (req, res)=> {
  res.sendFile('index.html')
});

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, `./../${isProd ? 'public': 'client'}`, 'index.html'));
});



app.listen(port, (err)=> {
  if(err) {
    console.log(err, 'An error occured');
  }
  console.log('Server is running on port ', process.env.PORT);
})

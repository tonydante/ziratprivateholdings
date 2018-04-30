import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpack from 'webpack';
import routes from './routes';
import devConfig from '../webpack.config.babel';
import prodConfig from '../webpack.config.prod.babel';

dotenv.config();
const app = express();
const configDB = require('./config/database');
let compiler;

if (process.env.NODE_ENV === 'production') {
  mongoose.connect(configDB.url_production,  { useMongoClient: true }); // connect to our production database
} else if (process.env.NODE_ENV === 'test') {
  mongoose.connect(configDB.url_test,  { useMongoClient: true }); // connect to our test database
  compiler = webpack(devConfig);
} else {
  mongoose.connect(configDB.url,  { useMongoClient: true });
  compiler = webpack(devConfig);
}


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static(__dirname + '/views'));
// app.use('/api/v1', routes);


app.get('/', (req, res)=> {
  res.sendFile('index.html')
});

app.listen(process.env.PORT || 9000, (err)=> {
  if(err) {
    console.log(err, 'An error occured');
  }
  console.log('Server is running on port ', process.env.PORT);
})

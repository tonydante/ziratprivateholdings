import express from 'express';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();


const app = express();
app.use(express.static(__dirname + '/views'));

app.get('/', (req, res)=> {
  res.sendFile('index.html')
});

app.listen(process.env.PORT || 9000, (err)=> {
  if(err) {
    console.log(err, 'An error occured');
  }
  console.log('Server is running on port ', process.env.PORT);
})

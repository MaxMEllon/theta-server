import 'babel-polyfill';
import express from 'express-await';
import bodyParser from 'body-parser';
import axios from 'axios';

const request = axios.create({
  baseURL: 'http://192.168.1.1',
  responseType: 'json',
})

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.postAsync('/osc/commands/execute', async (req, res) => {
  console.log('[INFO] ===> POST /osc/commands/execute', req.body);
  const response = await request({
    method: 'post',
    url: '/osc/commands/execute',
    data: req.body,
  });
  res.send(response.body);
  console.log('[INFO] <=== RES');
});

app.getAsync('/osc/info', async (req, res) => {
  console.log('[INFO] ===> GET /osc/info');
  const response = await request({
    method: 'get',
    url: '/osc/info',
  });
  res.send(response.data);
  console.log('[INFO] <=== RES');
});

app.listen(4000);

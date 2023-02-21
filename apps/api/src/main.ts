import express from 'express';
import * as path from 'path';
import { Firebase } from './app/config/Firebase';
import { productRouter } from './app/routes/product.router';

const app = express();

const firebase = new Firebase().initialize()

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/product', productRouter);

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/product`);
});
server.on('error', console.error);

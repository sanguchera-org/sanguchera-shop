import express from 'express';
import cors from 'cors';
import * as functions from 'firebase-functions';
import { Firebase } from './app/config/Firebase';
import { productRouter } from './app/routes/product.router';
import { userRouter } from './app/routes/user.router';
import { environment } from './environments/environment';

const app = express();

const firebase = new Firebase().initialize();

app.use(cors({ origin: true }));
app.use(express.json());

app.use('/product', productRouter);
app.use('/user', userRouter);

if (!environment.production) {
  const port = process.env.PORT || 3333;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/product`);
  });
  server.on('error', console.error);
}

exports.api = functions.https.onRequest(app);

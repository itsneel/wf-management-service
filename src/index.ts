import dotenv from 'dotenv';
import { Server } from './server';
import express, { Application } from 'express';

const app: Application = express();
const port = process.env.PORT || 3000;

dotenv.config();

const server: Server = new Server(app);

server.app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

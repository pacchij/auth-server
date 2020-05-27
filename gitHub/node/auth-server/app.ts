import express from 'express';
import { Request, Response } from "express";

import * as bodyParser from "body-parser";
import loginRouter from './loginRouter';

class App {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public app: express.Application;

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    const router = express.Router();

    router.get('/', (req: Request, res: Response) => {
      res.status(200).send({
        message: 'Hello World! @root'
      });
    });

    router.post('/', (req: Request, res: Response) => {
      res.status(200).send({
        message: 'Hello World! @root'
      });
    });

    this.app.use('/', router);

    this.app.use('/auth', loginRouter);
  }
}

export default new App().app;
import express from 'express';
import { Request, Response } from "express";
import { request } from 'http';
import firebaseAuth from './firebaseAuth';
import { isNullOrUndefined, isNull } from 'util';

const loginRouter = express.Router();
loginRouter.get('/createUser', async (req: Request, res: Response) => {
  try {
    const password: string = req.query.pwd as string;
    const email: string = req.query.user as string;
    if (isNull(password) || isNull(email)) {
      res.status(400).send({
        status: 'user name or password is empty',
        return: {}
      });
      return;
    }
    const ret = await firebaseAuth.createUser(email, password);
    res.status(200).send({
      status: 'success',
      return: ret
    });
  }
  catch(error) {
    res.status(400).send({
      status: 'failed',
      return: error
    });
  }
});

loginRouter.get('/signIn', async (req: Request, res: Response) => {
  try {
    const password: string = req.query.pwd as string;
    const email: string = req.query.user as string;
    if (isNull(password) || isNull(email)) {
      res.status(400).send({
        status: 'user name or password is empty',
        data: {}
      });
      return;
    }
    const ret = await firebaseAuth.signIn(email, password);
    res.status(200).send({
      status: 'success',
      data: ret
    });
  }
  catch(error) {
    res.status(400).send({
      status: 'failed',
      return: error
    });
  }
});


export default loginRouter;
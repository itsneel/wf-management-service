import express, { Application, Response, Request } from 'express';
import cors from 'cors';
import * as mainRoutes from './app.routes';
import { setRequestUserContext } from 'middlewares';
import { MainDBProvider } from 'common';

export class Server {
  app: Application;
  constructor(app: Application) {
    this.app = app;
    this._init();
    this._initMiddlewares();
    // if (!['production', 'staging'].includes(process.env.NODE_ENV || '')) {
    this._allowCors();
    // }
    this._initRoutes();
    return this;
  }

  private _init(): void {
    console.log('Initialising application Server');
    // initialise database conection
    // TODO: provide propper options
    new MainDBProvider({}, {}).initialize();
  }

  private _allowCors(): void {
    // this allows all origins
    // should be used only on local development
    this.app.use(cors());
  }

  private _initMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(setRequestUserContext);
  }

  private _initRoutes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.json({
        message: 'Backend Api! - ' + process.env.NODE_ENV,
      });
    });
    this.app.get('/v1', (req: Request, res: Response) => {
      res.json({
        message: 'V1 Backend Api! - ' + process.env.NODE_ENV,
      });
    });
    this.app.use('/v1', mainRoutes.default);
  }
}

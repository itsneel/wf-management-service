import { NextFunction, Response, Request } from 'express';

export const canEditWF = (req: Request, res: Response, next: NextFunction) => {
  // check if user has permission to edit the workflow
  next();
};

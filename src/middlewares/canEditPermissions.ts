import { WFRequest } from 'common';
import { NextFunction, Response, Request } from 'express';

export const canEditPermissions = (req: Request, res: Response, next: NextFunction) => {
  // check if user has permission to edit the workflow
  const userId = (req as WFRequest).user.id;

  next();
};

import { User, WFRequest } from 'common';
import { NextFunction, Response, Request } from 'express';

export const setRequestUserContext = (req: Request, resp: Response, next: NextFunction) => {
  let userId = <string>req.headers['x-remote-user'] || '';
  if (!userId || !userId.length) {
    return resp.status(401).json({
      error: 'Unauthorized request',
    });
  }

  const request = req as WFRequest;
  request.user = { id: userId } as User;

  // req['user'] = userId;
  return next();
};

import { Request } from 'express';
import { User } from '../index';

// TBD: on should use or not
export interface WFRequest extends Request {
  user: User;
}

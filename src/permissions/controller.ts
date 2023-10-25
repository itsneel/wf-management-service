import { NextFunction, Response, Request } from 'express';
import { PermissionsService } from './service';
import { WFRequest } from 'common';

class PermisisonsController {
  constructor(private _permissionsService: PermissionsService) {
    this.addOrUpdatePermisisonToWF = this.addOrUpdatePermisisonToWF.bind(this);
    this.revokePermisisonToWF = this.revokePermisisonToWF.bind(this);
  }

  public async addOrUpdatePermisisonToWF(
    req: Request,
    resp: Response,
    next: NextFunction,
  ): Promise<void> {
    // create or update permisisons for user by WF ID
    const wfId = req.body.get('workFlowId');
    const user = (req as WFRequest).user;
    const perm = req.body.get('perm');
    try {
      const response = await this._permissionsService.addOrUpdatePermisisonToWF(user, perm, wfId);
      resp.status(201).json({
        success: response,
      });
    } catch (error) {
      // handle error in a better way
      next(error);
    }
  }

  public async revokePermisisonToWF(
    req: Request,
    resp: Response,
    next: NextFunction,
  ): Promise<void> {
    const wfId = req.body.get('workFlowId');
    const user = (req as WFRequest).user;
    try {
      const response = await this._permissionsService.revokePermisisonToWF(user, wfId);
      resp.status(200).json({
        success: response,
      });
    } catch (error) {
      // handle error in a better way
      next(error);
    }
  }
}

export default new PermisisonsController(new PermissionsService());

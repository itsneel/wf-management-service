import { NextFunction, Request, Response } from 'express';
import { WorkFlowService } from './service';
import { PermissionsService } from 'permissions/service';
import { WFRequest } from 'common';
import { PermissionsEnum } from 'permissions/types';
import { Workflow } from './types';

export class WorkFlowController {
  constructor(
    private _workFlowService: WorkFlowService,
    private _permissionsService: PermissionsService,
  ) {
    this.createEmptyWorkflow = this.createEmptyWorkflow.bind(this);
  }

  public async createEmptyWorkflow(
    req: Request,
    resp: Response,
    next: NextFunction,
  ): Promise<void> {
    try {
      let data = req.body.data as Workflow;
      const workflow = await this._workFlowService.createEmptyWorkflow(data);
      if (!workflow) {
        resp.status(400).json({ error: 'something went wrong' });
      } else {
        const user = (req as WFRequest).user;
        // make current user the admin of current newly created workflow.
        await this._permissionsService.addOrUpdatePermisisonToWF(
          user,
          PermissionsEnum.ADMIN,
          workflow.id,
        );
        resp.status(200).json({
          success: workflow,
        });
      }
    } catch (error) {
      // log exceptions
      next(error);
    }
  }
}

export default new WorkFlowController(new WorkFlowService(), new PermissionsService());

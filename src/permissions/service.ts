import { User } from '../common';
import { PermissionModel } from './models';
import { PermissionsEnum } from './types';

export class PermissionsService {
  public async addOrUpdatePermisisonToWF(
    user: User,
    perm: PermissionsEnum,
    wfId: string,
  ): Promise<boolean> {
    // create or update permisisons for user by WF ID
    let model;

    try {
      const result = await PermissionModel.findOne({ workflow: wfId }).select('_id').lean();
      if (result) {
        // update the permission to db
        model = result;
        model.permisisons[user.id] = perm;
      } else {
        // create the record in db
        const permission = { [user.id]: perm };
        model = new PermissionModel({
          workflow: wfId,
          permissions: permission,
        });
      }

      await model.save();
      return true;
    } catch (error) {
      // log the error
    }
    return false;
  }

  public async revokePermisisonToWF(user: User, wfId: string): Promise<boolean> {
    let model;
    try {
      const result = await PermissionModel.findOne({ workflow: wfId }).select('_id').lean();
      if (result) {
        // update the permission to db
        model = result;
        delete model.permisisons[user.id];
        await model.save();
        return true;
      } else {
        // throw a custom exception
        throw new Error("user dosen't have permission");
      }
    } catch (error) {
      // log the error or propogate the error
    }
    return false;
  }
}

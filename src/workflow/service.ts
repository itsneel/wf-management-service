import { WorkflowModel } from './models';
import { Step, Workflow } from './types';

export class WorkFlowService {
  public async createEmptyWorkflow(data: Workflow): Promise<Workflow> {
    const model = new WorkflowModel({
      name: data.name,
      steps: [],
    });
    return await model.save();
  }

  public async addOrUpdateStepToWorkflow(
    wfId: string,
    order: number,
    step: Step<any, any>,
    replace: boolean = false,
  ): Promise<boolean> {
    const model = await WorkflowModel.findOne({ _id: wfId });
    if (!model) {
      throw new Error('no such workflow exists');
    }
    const idx = order - 1;
    if (replace) {
      model.steps[idx] = step;
    } else {
      model.steps.splice(idx, 0, step);
    }
    await model.save();
    return true;
  }

  public async removeStepFromWorkflow(wfId: string, order: number): Promise<Workflow> {
    let model = await WorkflowModel.findOne({ _id: wfId });
    if (!model) {
      throw new Error('no such workflow exists');
    }
    const idx = order - 1;
    model.steps.splice(idx, 1);
    return await model.save();
  }
}

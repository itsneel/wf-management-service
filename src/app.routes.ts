import express from 'express';
import { canEditWF, canEditPermissions } from './middlewares';

const mainRouter = express.Router();

// app routes
import * as workflowRouter from './workflow/routes';
import * as permisisonsRouter from './permissions/routes';

// routes
mainRouter.use('/workflow', canEditWF, workflowRouter.default);
mainRouter.use('/permissions', canEditPermissions, permisisonsRouter.default);

export = mainRouter;

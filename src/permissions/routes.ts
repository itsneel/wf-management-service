import express from 'express';
import permissions from './controller';

const router = express.Router();

router.post('/', permissions.addOrUpdatePermisisonToWF);
router.put('/', permissions.revokePermisisonToWF);

export = router;

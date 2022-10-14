import express from 'express';
import controller from '../controller/logs';
const router = express.Router();

router.get('/logs', controller.getLogs);
router.post('/logs', controller.addLogs);

export = router;
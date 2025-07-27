import { Router } from 'express';
import { HealthController } from '../controllers/HealthController';

const route = Router();
const healthController = new HealthController();

route.get('/health', healthController.check.bind(healthController));

export default route;

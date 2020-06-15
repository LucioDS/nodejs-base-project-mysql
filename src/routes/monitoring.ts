// dependencies
import {Router as router} from 'express';

// controllers
import monitoringControllers from '../controllers/monitoring';

const monitoring = router();

monitoring.get('/healthz', monitoringControllers.healthz);

monitoring.get('/healthz-sql', monitoringControllers.sqlcheck);

export default monitoring;

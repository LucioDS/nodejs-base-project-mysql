// dependencies
import { Router as router } from 'express';

// controllers
import { healthz, sqlcheck } from '../controllers/monitoring';

const monitoring = router();

monitoring.get('/healthz', healthz);

monitoring.get('/healthz-sql', sqlcheck);

export default monitoring;

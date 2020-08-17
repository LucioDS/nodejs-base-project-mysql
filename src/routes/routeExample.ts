// dependencies
import { Router } from 'express';

// middlewares
import { routeRight } from '../middlewares/routeRight';

// controllers
import { controllerSample } from '../controllers/controllerSample';

//constants
import { SAMPLE_SERVICE_TAG } from '../constants/serviceTags';

const router = Router();

router.get(
    '/resource',
    routeRight(SAMPLE_SERVICE_TAG),
    controllerSample
);

export default router;
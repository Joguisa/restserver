import { Request, Response, Router } from 'express';
import routes from '../controllers/user.controller';

const router = Router();

router.get('/', routes.userGet );

router.put('/', routes.userPut);

router.post('/', routes.userPost );

router.delete('/', routes.userDelete);

router.patch('/', routes.userPatch);

// export default router;
module.exports = router;
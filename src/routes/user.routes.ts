import { Router } from 'express';
import routes from '../controllers/user.controller';
import { check } from 'express-validator';

const router = Router();

router.get('/', routes.userGet );

router.put('/', routes.userPut);

router.post('/', [
    // middlewares
    check('email', 'The email is not valid').isEmail(),
] , routes.userPost );

router.delete('/', routes.userDelete);

router.patch('/', routes.userPatch);


// Exportamos el router
export default router;
import { Router } from 'express';
import routes from '../controllers/user.controller';
import { check } from 'express-validator';
import validateFields from '../middlewares/validate-fields';
import Role from '../models/role.model';

const router = Router();

router.get('/', routes.userGet );

router.put('/', routes.userPut);

router.post('/', [
    // middlewares
    check('name', 'The name is required').not().isEmpty(),
    check('password', 'The password must be at least 6 characters').not().isEmpty().isLength({ min: 6}),
    check('email', 'The email is not valid').isEmail(),
    // check('role', 'The role is required').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom( async(role = '') => {
        const existRole = await Role.findOne({ role});
        if (!existRole) {
            throw new Error(`The role ${ role } doesn't exist in DB`);
            
        }
    }),
    validateFields
] , routes.userPost );

router.delete('/', routes.userDelete);

router.patch('/', routes.userPatch);


// Exportamos el router
export default router;
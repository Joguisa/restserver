import { Router, Request, Response } from 'express';
import { check } from 'express-validator';
import { userDelete, userGet, userPost, userPut, } from '../controllers/user.controller'
import validateFields from '../middlewares/validate-fields';
import { isEmailValid, isIdValid, isRoleValid } from '../helpers/db-validators';

const router = Router();

router.get('/',
    (req: Request, res: Response) => {
        userGet(req, res);
    });

router.put('/:id', [
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(isIdValid),
    check('role').custom(isRoleValid),
    validateFields
], (req: Request, res: Response) => {
    userPut(req, res);
});

router.post('/', [
    check('name', 'The name is required').not().isEmpty(),
    check('password', 'The password must be at least 6 characters').not().isEmpty().isLength({ min: 6 }),
    check('email', 'The email is not valid').isEmail(),
    check('email').custom(isEmailValid),
    check('role').custom(isRoleValid),
    validateFields
], (req: Request, res: Response) => {
    userPost(req, res);
});

router.delete('/:id', [
    check('id', 'The id is not valid').isMongoId(),
    check('id').custom(isIdValid),
    validateFields
], (req: Request, res: Response) => {
    userDelete(req, res);
});

export default router;
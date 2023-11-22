import { Request, Response } from 'express';
import User from '../models/user.model';
import bcryptjs from 'bcryptjs';
import { validationResult } from 'express-validator';

// En este archivo controller se definen las rutas de la API

const userGet = (req: Request, res: Response) => {
    const { q, name = 'No name', apikey, page = 1, limit } = req.query;
    res.json({
        msg: 'get API - Controller',
        q,
        name,
        apikey,
        page,
        limit
    });
}

const userPut = (req: Request, res: Response) => {
        res.json({
            msg: 'put API - Controller'
    });
}

const userPost = async(req: Request, res: Response) => {

    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }

    const { name, email, password, role} =  req.body;
    const user = new User({ name, email, password, role });

    // Verificar si el correo existe
    const existEmail = await User.findOne({ email });
    if ( existEmail ) {
        return res.status(400).json({
            msg: 'The email is already registered'
        });
    }

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await user.save();

    res.json({
        msg: 'post API - Controller',
        user
    });
}

const userDelete = (req: Request, res: Response) => {
    res.json({
        msg: 'delete API - Controller'
    });
}

const userPatch = (req: Request, res: Response) => {
    res.json({
        msg: 'patch API - Controller'
    });
}

export default {
    userGet,
    userPut,
    userPost,
    userPatch,
    userDelete
}
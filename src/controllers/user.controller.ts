import { Request, Response } from 'express';
import { UserModel } from '../models';
import bcryptjs from 'bcryptjs';


// En este archivo controller se definen las rutas de la API

export const userGet = (req: Request, res: Response) => {
    const { q, name = 'No name', apikey, page = 1, limit } = req.query;
    res.json({
        msg: 'get API - Controller',
        q,
        name,
        apikey,
        page,
        limit
    });
};

export const userPut = async(req: Request, res: Response) => {

    const { id } = req.params;
    const { _id, password, google, email, ...rest } = req.body;

    // TODO validar contra base de datos
    if (password) {
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync( password, salt );
    }

    const user = await UserModel.findByIdAndUpdate( id, rest );

    res.json({
        msg: 'put API - Controller',
        user
    });
};

export const userPost = async(req: Request, res: Response) => {

    const { name, email, password, role} =  req.body;
    const user = new UserModel({ name, email, password, role });

    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt );

    // Guardar en BD
    await user.save()
    .then(() => {
        res.json({
            msg: 'post API - Controller',
            user
        });
    }).catch((error) => {
        console.error('Error in userPost:', error);
        res.status(500).json({ msg: 'Internal Server Error' });
    })
};

export const userDelete = (req: Request, res: Response) => {
    res.json({
        msg: 'delete API - Controller'
    });
};

export const userPatch = (req: Request, res: Response) => {
    res.json({
        msg: 'patch API - Controller'
    });
};



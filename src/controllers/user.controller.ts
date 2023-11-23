import { Request, Response } from 'express';
import { UserModel } from '../models';
import bcryptjs from 'bcryptjs';


// En este archivo controller se definen las rutas de la API

export const userGet = async(req: Request, res: Response) => {

    const { limit = 5, from = 0 } = req.query;
    const query = { state: true }
    
    const [ total, users ] = await Promise.all([
        UserModel.countDocuments(query),
        UserModel.find(query)
        .skip(Number( from ))
        .limit(Number( limit ))
    ]);

    res.json({
        total,
        users
    });
};

export const userPut = async(req: Request, res: Response) => {

    const { id } = req.params;
    const { _id, password, google, email, ...rest } = req.body;

    if (password) {
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync( password, salt );
    }

    const user = await UserModel.findByIdAndUpdate( id, rest );

    res.json({
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

export const userDelete = async(req: Request, res: Response) => {

    const { id } = req.params;
    const query = { state: false }

    // No eliminaremos el usuario solo le cambiaremos el estado a false
    const idDelete = await UserModel.findByIdAndUpdate( id, query );

    res.json({
        idDelete
    });
};



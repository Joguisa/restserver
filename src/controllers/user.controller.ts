import { Request, Response } from 'express';
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

const userPost = (req: Request, res: Response) => {
    const { name, age } =  req.body;
    res.json({
        msg: 'post API - Controller',
        name,
        age
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
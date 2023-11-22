import { Request, Response } from 'express';
// En este archivo controller se definen las rutas de la API

const userGet = (_req: Request, res: Response) => {
    res.json({
        msg: 'get API - Controller'
    });
}

const userPut = (_req: Request, res: Response) => {
        res.json({
            msg: 'put API - Controller'
    });
}

const userPost = (req: Request, res: Response) => {
    res.json({
        msg: 'post API - Controller'
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
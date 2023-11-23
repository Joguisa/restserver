import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/user.routes';
import dbConnection from './database/config.db';

dotenv.config();

export class Server {
    private app: express.Application;
    private usersPath: string;

    constructor() {
        this.app = express();
        this.usersPath = '/api/user';
        // Conectar a la base de datos
        this.connectDatabase();

        // Middlewares son funciones que se ejecutan antes de que lleguen a las rutas
        this.middlewares();
        this.routes();
    }

    async connectDatabase(){
        await dbConnection();
    }

    middlewares() {
        const publicPath = path.join(__dirname, '../public');

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio público
        this.app.use(express.static(publicPath));
    }

    routes() {
        this.app.use(this.usersPath, userRouter);
    }

    listen() {
        const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
        this.app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    }
}

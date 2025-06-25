import { NextFunction, Request, Response } from "express";

export function loggerGlobal(req: Request, res: Response, next: NextFunction) {
    const date = new Date().toISOString();
    console.log(`Estas ejecutando un método ${req.method} en la ruta ${req.url} ${date}`);
    next();
}
// DENTRO DO SEU ARQUIVO DE CONTROLLER (EX: authController.ts) - CORRETO

import { Request, Response } from "express";


export async function register(req: Request, res: Response) {
   res.send("oi");
}

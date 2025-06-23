import jwt, { JwtPayload } from "jsonwebtoken";
import Unauthenticated from "../errors/unauthenticated";
import { NextFunction, Request, Response } from "express";
import User from "../models/user";

async function authenticationMiddleware(req: Request, res: Response, next: NextFunction) {
   const authHeader = req.headers.authorization;

   if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Unauthenticated("Você deve estar logado para acessar isso!");
   }

   const token = authHeader.split(" ")[1];
   
   try {
      const payload = jwt.verify(token, process.env.JWT_SECRET!);
      const { userID } = payload as JwtPayload;

      const user = await User.findById(userID).select("-password -__v");

      if (!user) {
         throw new Unauthenticated("token invalido");
      }

      req.user = { userID: userID, userData: { name: user.name, email: user.email } };
      next();
   } catch (error) {
      throw new Unauthenticated("Você deve estar logado para acessar isso!");
   }
}

export default authenticationMiddleware;

import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import User from "../model/user";
import BadRequest from "../errors/badRequest";
import Unauthenticated from "../errors/unauthenticated";

export async function register(req: Request, res: Response) {
   const { name, email, password } = req.body;

   const user = await User.create({ name, email, password });

   const token = user.createToken();
   res.status(StatusCodes.CREATED).json({ success: true, user: { id: user._id, name: user.name }, token });
}

export async function login(req: Request, res: Response) {
   const { name, email, password } = req.body;

   if (!name && !email) {
      throw new BadRequest("Please provide email or name");
   }

   if (!password) {
      throw new BadRequest("Please provide password");
   }

   const user = await User.findOne({ $or: [{ email }, { name }] });

   if (!user) {
      throw new Unauthenticated("Invalid email or password");
   }

   const isPasswordCorrect = await user.comparePassword(password);

   if (!isPasswordCorrect) {
      throw new Unauthenticated("Invalid email or password");
   }

   const token = user.createToken();
   res.status(StatusCodes.OK).json({ success: true, user: { id: user.id, user: user.name }, token });
}

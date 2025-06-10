import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import Cloth from "../model/cloth";
import notFound from "../errors/notFound";
import BadRequest from "../errors/badRequest";

export async function getAllCloths(req: Request, res: Response) {
   const cloths = await Cloth.find();

   res.status(StatusCodes.OK).json({ method: "GET", success: true, data: cloths });
}
export async function getCloth(req: Request, res: Response) {
   const { id } = req.params;
   const cloth = await Cloth.findById(id);

   if (!cloth) {
      throw new notFound(`Nenhuma roupa com id ${id} encontrado`);
   }

   res.status(StatusCodes.OK).json({ method: "GET", success: true, data: cloth });
}

export async function addCloth(req: Request, res: Response) {
   const cloth = await Cloth.create(req.body);

   res.status(StatusCodes.CREATED).json({ method: "POST", success: true, data: cloth });
}

export async function updateCloth(req: Request, res: Response) {
   const { id } = req.params;
   const { name, quantity, price, size } = req.body;

   if (!name || !quantity || !price || !size) {
      throw new BadRequest('Não é permitido campos vazios');
   }

   const cloth = await Cloth.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });

   if (!cloth) {
      throw new notFound(`Nenhuma roupa com id ${id} encontrado`);
   }

   res.status(StatusCodes.OK).json({ method: "PATCH", success: true, data: cloth });
}

export async function deleteCloth(req: Request, res: Response) {
   const { id } = req.params;
   const cloth = await Cloth.findByIdAndDelete(id);

   if (!cloth) {
      throw new notFound(`Nenhuma roupa com id ${id} encontrado`);
   }

   res.status(StatusCodes.OK).json({ method: "DELETE", success: true, data: cloth });
}

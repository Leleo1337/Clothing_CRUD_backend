import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Cloth from '../models/cloth';
import notFound from '../errors/notFound';
import BadRequest from '../errors/badRequest';

export async function getAllCloths(req: Request, res: Response) {
	const cloths = await Cloth.find({ createdBy: req.user?.userID });

	res.status(StatusCodes.OK).json({ success: true, data: cloths });
}
export async function getCloth(req: Request, res: Response) {
	const { id: clothID } = req.params;
	const userID = req.user?.userID;

	const cloth = await Cloth.findOne({ _id: clothID, createdBy: userID });

	if (!cloth) {
		throw new notFound(`Nenhuma roupa com id ${clothID} encontrado`);
	}

	res.status(StatusCodes.OK).json({ success: true, data: cloth });
}

export async function addCloth(req: Request, res: Response) {
	const userID = req.user?.userID;
	const cloth = await Cloth.create({ ...req.body, createdBy: userID });

	res.status(StatusCodes.CREATED).json({ success: true, data: cloth });
}

export async function updateCloth(req: Request, res: Response) {
	const { name, quantity, price, size } = req.body;
	const { id: clothID } = req.params;
	const userID = req.user?.userID;

	if (!name || !quantity || !price || !size) {
		throw new BadRequest('É necessario preencher todos os campos');
	}

	const cloth = await Cloth.findOneAndUpdate(
		{ _id: clothID, createdBy: userID },
		{ name, quantity, price, size },
		{ new: true, runValidators: true },
	);

	if (!cloth) {
		throw new notFound(`Nenhuma roupa com id ${clothID} encontrado`);
	}

	res.status(StatusCodes.OK).json({ success: true, data: cloth });
}

export async function deleteCloth(req: Request, res: Response) {
	const { id: clothID } = req.params;
	const userID = req.user?.userID;

	const cloth = await Cloth.findOneAndDelete({ _id: clothID, createdBy: userID });

	if (!cloth) {
		throw new notFound(`Nenhuma roupa com id ${clothID} encontrado`);
	}

	res.status(StatusCodes.OK).json({ success: true, data: cloth });
}

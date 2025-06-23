import mongoose, { Types } from 'mongoose';
export interface ICloth extends mongoose.Document {
	name: string;
	quantity: Number;
	price: number;
	formattedPrice: string
	size: 'PP' | 'P' | 'M' | 'G' | 'GG' | 'XG' | 'XGG' | 'EG' | 'EGG';
	createdBy?: Types.ObjectId;
	createdAt: Date;
	updatedAt: Date;
}

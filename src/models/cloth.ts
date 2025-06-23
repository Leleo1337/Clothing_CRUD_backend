import mongoose from 'mongoose';
import formatPrice from '../utils/formatPrice';
import { ICloth } from '../interfaces/ICloth';
import { NextFunction } from 'express';
const autoIncrement = require('mongoose-sequence')(mongoose);

const clothSchema = new mongoose.Schema<ICloth>(
	{
		name: {
			type: String,
			required: [true, 'insira um nome'],
			trim: true,
		},
		quantity: {
			type: Number,
			required: [true, 'insira uma quantidade'],
		},
		price: {
			type: Number,
			required: [true, 'insira um preço'],
		},
		formatedPrice: {
			type: String,
		},
		size: {
			type: String,
			required: [true, 'Insira um tamanho valido ( PP | P  | M | G | GG | XG | XGG | EG | EGG )'],
			enum: {
				values: ['PP', 'P', 'M', 'G', 'GG', 'XG', 'XGG', 'EG', 'EGG'],
				message: '{VALUE} não é suportado, insira um tamanho PP | P  | M | G | GG | XG | XGG | EG | EGG',
			},
			trim: true,
		},
		createdBy: {
			type: mongoose.Types.ObjectId,
			ref: 'User',
			required: [false, 'Insira um usuario'],
		},
	},
	{ timestamps: true },
);

clothSchema.pre('save', function (next) {
	if (this.price !== undefined && this.price !== null) {
		this.formatedPrice = formatPrice(this.price);
	}
	next();
});

clothSchema.pre('findOneAndUpdate', function (this: any, next) {
   const update = this.getUpdate()
	if (update && update !== undefined && update.price !== null) {
      update.formatedPrice = formatPrice(update.price)
      this.setUpdate(update)
   }
   next()
});

clothSchema.plugin(autoIncrement, { inc_field: 'clothID' });

const Cloth = mongoose.model('cloths', clothSchema);

export default Cloth;

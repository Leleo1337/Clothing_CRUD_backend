import mongoose from "mongoose";
const autoIncrement = require('mongoose-sequence')(mongoose);

const clothSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, "insira um nome"],
      trim: true,
   },
   quantity: {
      type: Number,
      required: [true, "insira uma quantidade"],
   },
   price: {
      type: Number,
      required: [true, "insira um preço"],
   },
   size: {
      type: String,
      required: [true, "Insira um tamanho valido ( PP | P  | M | G | GG | XG | XGG | EG | EGG )"],
      enum: {
         values: ["PP", "P", "M", "G", "GG", "XG", "XGG", "EG", "EGG"],
         message: "{VALUE} não é suportado, insira um tamanho PP | P  | M | G | GG | XG | XGG | EG | EGG",
      },
      trim: true,
   },
});

clothSchema.plugin(autoIncrement, {inc_field: "clothID"})

const Cloth = mongoose.model("cloths", clothSchema);

export default Cloth;

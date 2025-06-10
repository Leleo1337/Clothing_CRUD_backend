import mongoose from "mongoose";

const clothSchema = new mongoose.Schema({
   name: {
      type: String,
      required: [true, "insira um nome"],
      trim: true,
   },
   quantity: {
      type: Number,
      required: [true, "insira uma quantity"],
   },
   price: {
      type: Number,
      required: [true, "insira um preço"],
   },
   size: {
      type: String,
      required: [true, "Por favor insira um tamanho ( PP | P  | M | G | GG | XG | XGG | EG | EGG )"],
      enum: {
        values: ["PP", "P", "M", "G", "GG", "XG", "XGG", "EG", "EGG"],
        message: '{VALUE} não é suportado, insira um tamanho PP | P  | M | G | GG | XG | XGG | EG | EGG'
      },
      trim: true
   },
});

const Cloth = mongoose.model("cloths", clothSchema);

export default Cloth;

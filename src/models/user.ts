import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { compareValue, hashValue } from "../utils/bcrypt";
import { IUser } from "../interfaces/IUser";

const UserSchema = new mongoose.Schema<IUser>({
   name: {
      type: String,
      required: [true, "Insira um nome"],
   },
   email: {
      type: String,
      required: [true, "Insira um email"],
      match: [
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         "Insira um email valido",
      ],
      unique: [true, "Usuario já cadastrado"],
   },
   password: {
      type: String,
      required: [true, "insira uma senha"],
      minLength: [6, "Senha muito curta"],
   },
});

UserSchema.pre("save", async function (next) {
   return (this.password = await hashValue(this.password));
});

UserSchema.methods.createToken = function (val: string) {
   return jwt.sign({ userID: this._id, name: this.name }, process.env.JWT_SECRET!, { expiresIn: "30d" });
};

UserSchema.methods.comparePassword = async function (val: string) {
   return compareValue(val, this.password);
};

const User = mongoose.model<IUser>("User", UserSchema);

export default User;

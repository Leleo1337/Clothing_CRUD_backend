import mongoose from "mongoose";

interface IUser extends Document{
   name?: string;
   email?: string;
   password?: string;
   createToken(): string;
   comparePassword(password: string): Promise<boolean>;
}

const UserSchema = new mongoose.Schema<IUser>({
   name: {
      type: String,
      required: [true, "Insira um nome"],
      unique: [true, "Nome já cadastrado"],
   },
   email: {
      type: String,
      required: [true, "Insira um email"],
      match: [
         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
         "Insira um email valido",
      ],
      unique: true,
   },
   password: {
      type: String,
      required: [true, "insira uma senha"],
   },
});
const User = mongoose.model("User", UserSchema);

export default User;

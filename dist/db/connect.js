import mongoose from "mongoose";
async function connectDB(MONGO_URI) {
    return mongoose
        .connect(MONGO_URI)
        .then(() => console.log("connected to db"))
        .catch((e) => console.log(e));
}
export default connectDB;
//# sourceMappingURL=connect.js.map
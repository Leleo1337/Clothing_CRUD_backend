import { exit } from "process";
import app from "./app";
import connectDB from "./db/connect";
const MONGO_URI = process.env.MONGO_URI;
const PORT = process.env.PORT;
async function start() {
    try {
        if (!MONGO_URI || PORT) {
            console.log("Please fill all environment variables");
            exit(1);
        }
        await connectDB(MONGO_URI);
        app.listen(PORT, () => console.log(`app listening on port ${PORT}`));
    }
    catch (error) {
        console.log(error);
    }
}
start();
//# sourceMappingURL=server.js.map
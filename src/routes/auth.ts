import { register } from "../controllers/auth";
import express from "express";

const router = express.Router();

router.post("/register", register as any);


export default router;

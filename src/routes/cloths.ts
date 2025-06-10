import { addCloth, getAllCloths, getCloth, updateCloth,deleteCloth } from "../controllers/cloths";
import express from "express";

const router = express.Router();

router.get("/", getAllCloths);
router.get("/:id", getCloth);
router.post("/", addCloth);
router.patch("/:id", updateCloth);
router.delete("/:id", deleteCloth);

export default router;

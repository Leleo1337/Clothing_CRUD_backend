import { addCloth, getAllClothes, getCloth, updateCloth, deleteCloth } from "../controllers/clothes";
import express from "express";

const router = express.Router();

router.get("/", getAllClothes);
router.get("/:id", getCloth);
router.post("/", addCloth);
router.patch("/:id", updateCloth);
router.delete("/:id", deleteCloth);

export default router;

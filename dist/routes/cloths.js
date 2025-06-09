import express from "express";
const router = express.Router();
router.get('/', (req, res) => {
    res.json({ msg: "oi" });
});
export default router;
//# sourceMappingURL=cloths.js.map
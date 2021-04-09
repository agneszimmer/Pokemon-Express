import express from "express";
import { getAll, getSingle } from '../controllers/pokemon.js';
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getSingle);

export default router;
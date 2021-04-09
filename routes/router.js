import express from "express";
import { getAll, getSingle, getSingleInfo } from '../controllers/pokemon.js';
const router = express.Router();

router.get('/', getAll);
router.get('/:id', getSingle);
router.get('/:id/:name', getSingleInfo);

export default router;
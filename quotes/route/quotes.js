import express from 'express';
import {getQuotes,createQuotes} from '../controllers/quotes.js'

const router=express.Router();

router.get("/getAll",getQuotes)
router.post("/",createQuotes)

export default router 
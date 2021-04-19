import express from 'express';
import {getStudents,createStudents} from '../controllers/student.js'

const router=express.Router();

router.get("/",getStudents)
router.post("/add",createStudents)
export default router
import express from "express";
import { isAdminAuthenticated } from "../middlewares/auth.js";
import { getAllMessages, sendMessage } from '../controller/messageController.js'; // Adjust the path as needed

 
const router = express.Router();

router.post("/send",sendMessage);
router.get("/getall",isAdminAuthenticated,getAllMessages);

export default router;
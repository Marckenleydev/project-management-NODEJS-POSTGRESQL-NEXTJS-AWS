import { Router } from "express";
import { createUser, getUsers } from "../controllers/userController";



const router = Router();

router.get("/", getUsers);
router.post("/create-user", createUser);

export default router;
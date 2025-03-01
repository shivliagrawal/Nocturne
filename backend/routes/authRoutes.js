import express from "express";
import { registerUser, loginUser, getUserInfo } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js"; // Ensure authentication

const router = express.Router();

router.post("/signup", registerUser);
router.post("/login", loginUser);

// ✅ Secure route: Fetch user info only for logged-in users
router.get("/user", protect, getUserInfo);

export default router;

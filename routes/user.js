import express from "express";
import {
  // getAllUsers,
  getMyProfile,
  login,
  logout,
  register,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// router.get("/all", getAllUsers); use this route for Admin Pannel

router.post("/new", register);
router.post("/login", login);
router.get("/logout", logout);

// dynamic route api

router.get("/me", isAuthenticated, getMyProfile);

export default router;

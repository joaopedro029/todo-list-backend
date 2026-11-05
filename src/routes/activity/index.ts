import { Router } from "express";
import {
  create,
  getAll,
  getById,
  remove,
  update,
} from "../../controller/activity.controller";

export const router = Router();

router.get("/get-all", getAll);
router.get("/:id", getById);
router.post("/create", create);
router.put("/update/:id", update);
router.delete("/delete/:id", remove);

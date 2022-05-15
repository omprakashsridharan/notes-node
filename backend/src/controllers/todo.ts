import express from "express";
import { TodoModel } from "../db/models/todo";

export const router = express.Router();

router.get("/", (req, res) => {
	TodoModel.findOne((err, result) => {
		res.json(result);
	});
});

router.post("/", async (req, res) => {
	const { title, description } = req.body;
	const newTodo = new TodoModel({
		title,
		description,
		status: false,
	});
	await newTodo.save();
	res.json(newTodo);
});

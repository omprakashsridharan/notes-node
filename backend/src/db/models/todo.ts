import mongoose, { Schema } from "mongoose";

interface ITodo {
	title: String;
	description: String;
	status: Boolean;
}

const schema = new Schema<ITodo>(
	{
		title: String,
		description: String,
		status: Boolean,
	},
	{
		capped: { size: 1024 },
		bufferCommands: false,
		autoCreate: true,
	}
);

export const TodoModel = mongoose.model("todo", schema);

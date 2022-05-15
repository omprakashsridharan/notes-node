import express from "express";
import { connect } from "./db";
import controllers from "./controllers";

const app = express();
const port = 3000;
const { todosRouter } = controllers;

app.use(express.json());

app.use("/todos", todosRouter);

async function initDependencies() {
	await connect();
	console.log("Dependencies initialised");
}

initDependencies()
	.then(() => {
		app.listen(port, () => {
			console.log(`Example app listening on port ${port}`);
		});
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});

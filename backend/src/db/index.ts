import mongoose from "mongoose";

export async function connect() {
	await mongoose.connect(
		"mongodb+srv://dev:dev@cluster0.ksttq.mongodb.net/Cluster0?retryWrites=true&w=majority"
	);
}

import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../src/config/db.js";

dotenv.config();

beforeAll(async () => {
	await connectDB();
});

beforeEach(async () => {
	const { collections } = mongoose.connection;
	const cleanupTasks = Object.values(collections).map((collection) =>
		collection.deleteMany({})
	);

	await Promise.all(cleanupTasks);
});

afterAll(async () => {
	await mongoose.connection.close();
});
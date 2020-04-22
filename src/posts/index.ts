import { createPosts } from "./action/create";
import { readAllPosts } from "./action/read-all";
import { readPosts } from "./action/read";
import { updatePosts } from "./action/update";
import { deletePosts } from "./action/delete";

export const createPostHandler = (event, context, callback) => {
	createPosts(event, (error, result) => {
		const response = {
			statusCode: 200,
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify(result),
		};

		context.succeed(response);
	});
};

export const readAllPostHandler = (event, context, callback) => {
	readAllPosts(event, (error, result) => {
		const response = {
			statusCode: 200,
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify(result),
		};

		context.succeed(response);
	});
};

export const readPostHandler = (event, context, callback) => {
	readPosts(event, (error, result) => {
		const response = {
			statusCode: 200,
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify(result),
		};

		context.succeed(response);
	});
};

export const updatePostHandler = (event, context, callback) => {
	updatePosts(event, (error, result) => {
		const response = {
			statusCode: 200,
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify(result),
		};

		context.succeed(response);
	});
};

export const removePostHandler = (event, context, callback) => {
	deletePosts(event, (error, result) => {
		const response = {
			statusCode: 200,
			headers: {
				"Access-Control-Allow-Origin": "*",
			},
			body: JSON.stringify(result),
		};

		context.succeed(response);
	});
};

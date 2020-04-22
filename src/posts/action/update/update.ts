"use strict";

import AWS from "aws-sdk";
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const updatePosts = (event, callback) => {
	const data = JSON.parse(event.body);

	data.id = event.pathParameters.id;
	data.updatedAt = new Date().getTime();

	const params = {
		TableName: "todos",
		Item: data,
	};

	return dynamoDb.put(params, (error, data) => {
		if (error) {
			callback(error);
		}
		callback(error, params.Item);
	});
};

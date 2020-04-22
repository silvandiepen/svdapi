"use strict";

import AWS from "aws-sdk";
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const deletePosts = (event, callback) => {
	const params = {
		TableName: "todos",
		Key: {
			id: event.pathParameters.id,
		},
	};

	return dynamoDb.delete(params, (error, data) => {
		if (error) {
			callback(error);
		}
		callback(error, params.Key);
	});
};

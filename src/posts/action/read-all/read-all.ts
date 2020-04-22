"use strict";

import AWS from "aws-sdk";
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export const readAllPosts = (event, callback) => {
	const params = {
		TableName: "todos",
	};

	return dynamoDb.scan(params, (error, data) => {
		if (error) {
			callback(error);
		}
		callback(error, data.Items);
	});
};

"use strict";

import AWS from "aws-sdk";
const dynamoDb = new AWS.DynamoDB.DocumentClient();
import uuid from "uuid";

export const createPosts = (event, callback) => {
	const data = JSON.parse(event.body);

	data.id = uuid.v1();
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

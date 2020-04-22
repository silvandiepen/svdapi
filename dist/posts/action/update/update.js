"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dynamoDb = new aws_sdk_1.default.DynamoDB.DocumentClient();
exports.updatePosts = (event, callback) => {
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
//# sourceMappingURL=update.js.map
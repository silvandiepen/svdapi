"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dynamoDb = new aws_sdk_1.default.DynamoDB.DocumentClient();
exports.deletePosts = (event, callback) => {
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
//# sourceMappingURL=delete.js.map
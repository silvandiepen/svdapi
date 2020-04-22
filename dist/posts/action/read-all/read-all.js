"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dynamoDb = new aws_sdk_1.default.DynamoDB.DocumentClient();
exports.readAllPosts = (event, callback) => {
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
//# sourceMappingURL=read-all.js.map
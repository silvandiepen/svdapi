import AWS from "aws-sdk";
export declare const createPosts: (event: any, callback: any) => AWS.Request<AWS.DynamoDB.DocumentClient.PutItemOutput, AWS.AWSError>;

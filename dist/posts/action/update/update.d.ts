import AWS from "aws-sdk";
export declare const updatePosts: (event: any, callback: any) => AWS.Request<AWS.DynamoDB.DocumentClient.PutItemOutput, AWS.AWSError>;

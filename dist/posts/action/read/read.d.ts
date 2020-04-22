import AWS from "aws-sdk";
export declare const readPosts: (event: any, callback: any) => AWS.Request<AWS.DynamoDB.DocumentClient.GetItemOutput, AWS.AWSError>;

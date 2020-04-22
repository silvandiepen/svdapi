import AWS from "aws-sdk";
export declare const readAllPosts: (event: any, callback: any) => AWS.Request<AWS.DynamoDB.DocumentClient.ScanOutput, AWS.AWSError>;

import AWS from "aws-sdk";
export declare const deletePosts: (event: any, callback: any) => AWS.Request<AWS.DynamoDB.DocumentClient.DeleteItemOutput, AWS.AWSError>;

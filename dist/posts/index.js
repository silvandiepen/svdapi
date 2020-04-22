"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const create_1 = require("./action/create");
const read_all_1 = require("./action/read-all");
const read_1 = require("./action/read");
const update_1 = require("./action/update");
const delete_1 = require("./action/delete");
exports.createPostHandler = (event, context, callback) => {
    create_1.createPosts(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(result),
        };
        context.succeed(response);
    });
};
exports.readAllPostHandler = (event, context, callback) => {
    read_all_1.readAllPosts(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(result),
        };
        context.succeed(response);
    });
};
exports.readPostHandler = (event, context, callback) => {
    read_1.readPosts(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(result),
        };
        context.succeed(response);
    });
};
exports.updatePostHandler = (event, context, callback) => {
    update_1.updatePosts(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(result),
        };
        context.succeed(response);
    });
};
exports.removePostHandler = (event, context, callback) => {
    delete_1.deletePosts(event, (error, result) => {
        const response = {
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify(result),
        };
        context.succeed(response);
    });
};
//# sourceMappingURL=index.js.map
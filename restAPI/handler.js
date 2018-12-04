"use strict";

const uuid = require("uuid");
const AWS = require("aws-sdk");

/*
dynamoDB config for DEVELOPMENT VERSION ONLY.
REMOVE/ change when deploying prod version
*/
const dynamoDb = AWS.DynamoDB.DocumentClient({
  region: "localhost",
  endpoint: "http://localhost:8800"
});

module.exports.hello = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input: event
    })
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

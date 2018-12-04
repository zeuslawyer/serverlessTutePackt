"use strict";

const { fetchUsers } = require("./APIs/axios");

module.exports.hello = async (event, context, callback) => {
  const res = await fetchUsers();
  return {
    statusCode: 200,
    body: JSON.stringify(res.data)
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

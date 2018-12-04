"use strict";

// const axios = require("axios");
const { fetchUsers } = require("./APIs/axios");

// const URL = "http://jsonplaceholder.typicode.com/users";

module.exports.hello = async (event, context, callback) => {
  // const res = await axios.get(URL);
  const res = await fetchUsers();

  const response = {
    statusCode: 200,
    body: JSON.stringify(res.data)
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

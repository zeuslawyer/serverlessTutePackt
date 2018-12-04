const axios = require("axios");

const URL = "http://jsonplaceholder.typicode.com/users";

const fetchUsers = async () => {
  console.log("<< helper axios function has been hit >>");
  return await axios.get(URL);
};

module.exports = { fetchUsers };

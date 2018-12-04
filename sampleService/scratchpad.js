const axios = require("axios");
// const util = require("util");

const URL = "http://jsonplaceholder.typicode.com/users/";
const data = axios.get(URL).then(res => {
  // console.log(util.inspect(res))
  // console.log(util.inspect(res))
  console.log(res.data[1]);
});

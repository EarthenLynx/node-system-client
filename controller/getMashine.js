const axios = require("axios");

GET_MASHINE = (req, res) => {
  const username = "hettichuser";
  const password = "welcome01";

  const auth8 = username + ":" + password;
  const auth64 = Buffer.from(auth8).toString("base64");

  axios
    .get("https://system-status-one.herokuapp.com/mashine/three", {
      // TODO: fix the headers
      headers: {
        Authorization: auth64,
      },
    })
    .then((response) => {
      res.send(JSON.stringify(response.data));
    })
    .catch((err) => console.log(err));
};

module.exports = GET_MASHINE;

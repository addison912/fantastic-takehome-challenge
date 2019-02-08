/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

const express = require("express"),
  bodyParser = require("body-parser"),
  axios = require("axios"),
  cors = require("cors");

// generate a new express app and call it 'app'
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

let ping = setInterval(checkServer, 3000);
let fantasticStatus = [];
function checkServer() {
  let timestamp = Date.now();
  axios
    .get("http://localhost:12345")
    .then(function(response) {
      return response;
    })
    .then(processedResponse => {
      console.log(processedResponse.status);
      fantasticStatus.unshift({
        timestamp: timestamp,
        code: processedResponse.status
      });
    })
    .catch(err => {
      console.log(err.response.status);
      fantasticStatus.unshift({
        timestamp: timestamp,
        code: err.response.status
      });
    });
  if (fantasticStatus.length > 300) {
    fantasticStatus = fantasticStatus.slice(0, 300);
  }
}

////////////////////
//  ROUTES
///////////////////
app.get("/api/fantastic", function(req, res) {
  res.json({ fantasticStatus: fantasticStatus });
});

//run server on port 3000
app.listen(process.env.PORT || 4000, function() {
  console.log("fantastic status app listening at http://localhost:3000/");
});

const express = require("express");
const cors = require("cors"); //Cross-Origin Resource Sharing

const bodyParser = require("body-parser");

//include required modules
const jwt = require("jsonwebtoken");
const config = require("./config");
const rp = require("request-promise");

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express and Zoom API" });
});
//zoom

var email, userid, resp;

//Use the ApiKey and APISecret from config.js
const payload = {
  iss: config.APIKey,
  exp: new Date().getTime() + 5000,
};

const token = jwt.sign(payload, config.APISecret);
app.post("/meeting", (req, res) => {
  email = req.body.email;
  var options = {
    method: "POST",
    uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
    body: {
      topic: "Meeting",
      type: 1,
      settings: {
        host_video: "true",
        participant_video: "true",
      },
    },
    auth: {
      bearer: token,
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json",
    },
    json: true, //Parse the JSON string in the response
  };

  rp(options)
    .then(function (response) {
      console.log("response is: ", response.join_url);
      // response.status(200).json(response);
      let dataRes = {
        join_url: response.join_url,
      };
      res.status(200).json(dataRes);

      // res.send("create meeting result: " + JSON.stringify(response));
    })
    .catch(function (err) {
      // API call failed...
      console.log("API call failed, reason ", err);
    });
});

app.post("/api/connectZoom", (req, res) => {
  console.log(req.body)
  try {
    const b = Buffer.from(process.env.ZOOM_API_KEY + ":" + config.APIKey);
    const zoomRes = fetch(`https://zoom.us/oauth/token?grant_type=authorization_code&code=${req.body.code}&redirect_uri=${config.RedirectUrl}`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${b.toString("base64")}`,
      },
    });
    console.log(req.body.code)
    console.log(config.RedirectUrl)
    console.log(zoomRes)
    // console.log(zoomRes)
    // if (!zoomRes.ok)
    //   return res.status(401).send("Could not connect with Zoom");
    // const zoomData = await zoomRes.json();
    // if (zoomData.error)
    //   return res.status(401).send("Could not connect with Zoom");
    // // Retreive user details
    // const zoomUserRes = await fetch("https://api.zoom.us/v2/users/me", {
    //   method: "GET",
    //   headers: {
    //     Authorization: `Bearer ${zoomData.access_token}`,
    //   },
    // });
    // const zoomUserData = await zoomUserRes.json();
    // /* 
    //   Encrypt and store below details to your database:
    //     zoomUserData.email
    //     zoomUserData.account_id
    //     zoomData.access_token
    //     zoomData.refresh_token
    //     zoomData.expires_in // convert it to time by adding these seconds to current time
    // */
    return res.send({
      /* Return necessary data to frontend */
      b
    });
  } catch (e) {
    return res.status(500).send("Something went wrong" , e);
  }
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});

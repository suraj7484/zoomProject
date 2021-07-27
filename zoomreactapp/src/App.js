// import meeting from "./meeting.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");

  // const zoomMeeting = () => {
  //   // const data = {
  //   //   email: "surajburman330@gmail.com",
  //   // };
  //   const formData = new URLSearchParams();
  //   formData.append('response_type', 'code');
  //   formData.append('client_id', 'wh4V3jn6SNKQqKgVs3EYw');
  //   formData.append('redirect_uri', 'http://localhost:3000/createMeeting');

  //   const options = {
  //     url: "https://zoom.us/oauth/authorize",
  //     method: 'POST',
  //     data: formData,
  //     headers: {
  //       'content-type': 'application/x-www-form-urlencoded',
  //       'accept': 'application/json',
  //     },
  //   };

  //   axios
  //     .request(options)
  //     .then((response) => {
  //       // let URL =
  //       //   response.data.join_url.replaceAll(
  //       //     "https://us04web.zoom.us/j/",
  //       //     "http://localhost:9996/?"
  //       //   ) + `?role=1?name=${username}`;
  //       // console.log(URL);
  //       // window.location.replace(`${URL}`);
  //       console.log(response)
  //     })
  //     .catch((err) => console.error(err));
  // };
  return (
    <div className="App">
      <header className="App-header">
        {/* <Student /> */}
        <h1>Zoom Meeting</h1>
        <div className="card">
          <h5>
            Name&nbsp;&nbsp;
            <input
              type="text"
              name="name"
              style={{
                width: "300px",
                borderRadius: "5px",
                padding: "8px 12px",
                fontSize: "18px",
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </h5>

          <div className="row" style={{ margin: "10px" }}>
            <div className="column">
              <div
                className="row"
                style={{ margin: "10px", marginTop: "120px" }}
              >
                <a
                  className="btn btn-info"
                  style={{
                    width: "290px",
                    height: "80px",
                    fontSize: "20px",
                    fontFamily: "cursive",
                  }}
                  // onClick={zoomMeeting}
                  href={`https://zoom.us/oauth/authorize?response_type=code&client_id=wh4V3jn6SNKQqKgVs3EYw&redirect_uri=http://localhost:3000/createMeeting`}
                >
                  Create Meeting
                </a>
              </div>
            </div>
            <div className="column" style={{ float: "right" }}>
              <img
                src="\meeting.png"
                height="330px"
                width="400px"
                style={{
                  margin: "10px",
                  borderRadius: "50px",
                }}
                alt=""
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

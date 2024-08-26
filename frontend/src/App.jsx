import React from "react";

import "./App.css";
import ZoomMtgEmbedded from "@zoom/meetingsdk/embedded";

function App() {
  const client = ZoomMtgEmbedded.createClient();

  // var authEndpoint = "http:localhost:4000";
  var sdkKey = "nibV3hlUQzZSR7ge3HWMw";
  var meetingNumber = 92621769668;
  var passWord = 734374;
  var role = 0;
  var userName = "Main";
  var userEmail = "";
  var registrantToken = "";
  var zakToken = "";

  function getSignature(e) {
    e.preventDefault();

    startMeeting(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBLZXkiOiJuaWJWM2hsVVF6WlNSN2dlM0hXTXciLCJzZGtLZXkiOiJuaWJWM2hsVVF6WlNSN2dlM0hXTXciLCJtbiI6OTI2MjE3Njk2NjgsInJvbGUiOjAsImlhdCI6MTcyNDY1OTI2NCwiZXhwIjoxNzI0NjY2NDY0LCJ0b2tlbkV4cCI6MTcyNDY2NjQ2NH0.XBVRTj5PE_7LtbjCo98qXS11E6FlPrUP3E5tB-cWmdM"
    );
  }

  function startMeeting(signature) {
    let meetingSDKElement = document.getElementById("meetingSDKElement");

    client
      .init({
        zoomAppRoot: meetingSDKElement,
        language: "en-US",
        patchJsMedia: true,
        leaveOnPageUnload: true,
      })
      .then(() => {
        client
          .join({
            signature: signature,
            sdkKey: sdkKey,
            meetingNumber: meetingNumber,
            password: passWord,
            userName: userName,
            userEmail: userEmail,
            tk: registrantToken,
            zak: zakToken,
          })
          .then(() => {
            console.log("joined successfully");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log("here");
        console.log(error);
      });
  }

  return (
    <div className="App">
      <main>
        <h1>Zoom Meeting SDK Sample React</h1>

        {/* For Component View */}
        <div id="meetingSDKElement">
          {/* Zoom Meeting SDK Component View Rendered Here */}
        </div>

        <button onClick={getSignature}>Join Meeting</button>
      </main>
    </div>
  );
}

export default App;

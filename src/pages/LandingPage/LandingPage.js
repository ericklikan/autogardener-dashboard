import React, { Component } from "react";

const top = {
  textAlign: "center"
};

const page = {
  fontSize: "1.5em"
};

const asset = {
  width: "100%"
};

class LandingPage extends Component {
  render() {
    return (
      <div className="container">
        <div style={top}>
          <h3>Welcome to Autogarden</h3>
          <p>Please sign in by using the Sign in button on the top right</p>
        </div>
        <br />
        <br />
        <div style={page}>
          <p>
            This project was created by Erick Leon in order to facilitate
            growing household plants. There are three main components that make
            up the system:{" "}
            <a href="https://github.com/ericklikan/autogardener-dashboard">
              the dashboard
            </a>
            ,{" "}
            <a href="https://github.com/ericklikan/autogarden-app">
              the middleware server
            </a>
            , and{" "}
            <a href="https://github.com/ericklikan/autogardener-device">
              the device
            </a>
            . In order to make signing in easier and compatible with things such
            as google assistant, you must sign in through Google.
            <br />
            <br />
            Once you set up the device with a RaspberryPi and Arduino with the
            correct sensors, connect it to your Firebase real-time database, and
            the middleware server for Socket.io on heroku, you are easily able
            to start up the dashboard and remotely water your plants, and
            monitor environment conditions such as temperature, humidity and
            soil moisture percentage!
            <br />
            <br />
            Of course there are probably more sensors and features that can be
            added such as graphs for watering/environment data, setting
            automatic watering and notifications.
          </p>
          <br />
          <h4 style={{ fontWeight: "bold" }}>Demos:</h4>
          <p>
            This is what the dashboard looks like when you have an active device
            which updates in real-time:
          </p>
          <img
            src={require("./demoAssets/demo.JPG")}
            style={asset}
            alt="Error!"
          />
          <p>In the beginning there was plants...</p>
          <img
            src={require("./demoAssets/start.JPG")}
            style={asset}
            alt="Error!"
          />
          <p>
            Hooked up the middleware server to a simple IFTTT Webook and I could
            water it with Google Assistant!
          </p>
          <video style={{ width: "50%" }} controls>
            <source src={require("./demoAssets/video.mp4")} type="video/mp4" />
          </video>
          <br />
          <p>Results (after several months and plants getting too big)!</p>
          <img
            src={require("./demoAssets/results.JPG")}
            style={asset}
            alt="Error!"
          />
        </div>
      </div>
    );
  }
}

export default LandingPage;

import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [data, setData] = useState(null);

  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js

  useEffect(() => {
    const callBackendAPI = async () => {
      const response = await fetch("/express_backend");
      const body = await response.json();

      if (response.status !== 200) {
        throw Error(body.message);
      }

      return body;
    };

    callBackendAPI()
      .then(res => setData(res.express))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={logo} />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      {/* Render the newly fetched data inside of this.state.data */}
      {data && <p className="App-intro">{data}</p>}
    </div>
  );
};

export default App;

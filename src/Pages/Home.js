import React from "react";
import Stops from "../components/Stops/Stops";
const serverUrl = "https://winnipegtransitserver.herokuapp.com/api/";

function Home(props) {
  return (
    <div className="container">
      {props.coords ? (
        <Stops url={serverUrl + props.coords} />
      ) : (
        <>
          <h2>Allow Location to See nearby Stops</h2>
          <h2>Deny if Out of Winnipeg</h2>
        </>
      )}
    </div>
  );
}

export default Home;

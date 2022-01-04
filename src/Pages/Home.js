import React from "react";
import { useState } from "react";
import Stops from "../components/Stops/Stops";
import GetLocation from "../components/Utils/GetLocation";
const defaultCoords = "49.89242728391351--97.14950606321388";
const serverUrl = "https://winnipegtransitserver.herokuapp.com/api/";

function Home() {
  const [coords, setCoords] = useState("");
  GetLocation(setCoords);
  return (
    <div className="container">
      {coords ? (
        <Stops url={serverUrl + coords} />
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

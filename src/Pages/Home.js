import React from "react";
import { useState } from "react";
import Stops from "../components/Stops/Stops";

const defaultLoc = "49.89242728391351--97.14950606321388";
const serverUrl = "https://winnipegtransitserver.herokuapp.com/api/";

function Home() {
  return (
    <div className="container">
      <Stops url={serverUrl + defaultLoc} />
    </div>
  );
}

export default Home;

import React from "react";
import { Link } from "react-router-dom";
function Stop(props) {
  const address = "/stop/" + props.stop.key;
  return (
    <Link to={address} className="stop_link">
      <div id={props.stop.key} className="stop">
        <h6>{props.stop.name}</h6>
        <h6>{props.stop.distances.direct}m</h6>
      </div>
    </Link>
  );
}

export default Stop;

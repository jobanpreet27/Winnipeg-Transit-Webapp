import React from "react";
import { Link } from "react-router-dom";
function Stop(props) {
  const address = "/stop/" + props.stop.key;
  return (
    <Link to={address}>
      <div id={props.stop.key} className="stop">
        <h3>{props.stop.name}</h3>
        <h3>{props.stop.distances.direct}m</h3>
      </div>
    </Link>
  );
}

export default Stop;

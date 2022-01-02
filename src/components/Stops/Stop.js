import React from "react";

function Stop(props) {
  return (
    <div id={props.stop.key} className="stop">
      <h3>{props.stop.name}</h3>
      <h3>{props.stop.distances.direct}</h3>
    </div>
  );
}

export default Stop;

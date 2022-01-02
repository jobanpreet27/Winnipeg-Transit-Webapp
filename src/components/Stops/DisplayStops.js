import { data } from "jquery";
import React from "react";
import Stop from "./Stop";
function DisplayStops(props) {
  return (
    <div>
      {props.data.map(function (stop) {
        return <Stop stop={stop} />;
      })}
    </div>
  );
}
export default DisplayStops;

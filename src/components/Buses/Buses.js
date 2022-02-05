import React from "react";
import Bus from "./Bus";
function Buses(props) {
  return (
    <div className="bus_list">
      {props.data.map(function (bus) {
        return <Bus bus={bus} />;
      })}
    </div>
  );
}

export default Buses;

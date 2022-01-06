import React from "react";
import Bus from "./Bus";
function Buses(props) {
  console.log(props.data);
  return (
    <div>
      {props.data.map(function (bus) {
        return <Bus bus={bus} />;
      })}
    </div>
  );
}

export default Buses;

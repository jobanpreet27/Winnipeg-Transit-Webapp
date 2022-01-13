import React from "react";
import { Link } from "react-router-dom";
import FetchRoutes from "./FetchRoutes";
import FavoriteIcon from "./FavoriteIcon";

function Stop(props) {
  const address = "/stop/" + props.stop.key;
  return (
    <li key={props.stop.key} className="stop">
      <Link to={address} className="stop_link">
        <div className="stop_info">
          <h5>{props.stop.name}</h5>
          <h6 className="stop_buses">
            <FetchRoutes stopKey={props.stop.key} />
          </h6>
        </div>
        <div className="stop_distance">
          {/*check if no distance (for favorite list)*/}
          {props.stop.distances ? (
            <h6>{props.stop.distances.direct}m</h6>
          ) : (
            <></>
          )}
        </div>
        <div className="stop_fav">
          <FavoriteIcon name={props.stop.name} stopKey={props.stop.key} />
        </div>
      </Link>
    </li>
  );
}

export default Stop;

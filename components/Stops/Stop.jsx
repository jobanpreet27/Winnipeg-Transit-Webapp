import React from "react";
import Link from "next/link"
import FetchRoutes from "./FetchRoutes";
import FavoriteIcon from "./FavoriteIcon";

function Stop(props) {
  const address = "/stop/" + props.stop.key;
  return (
    <li key={props.stop.key} className="stop">
      <Link href={address} className="stop_link">
        <a><div className="stop_info">
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
        </a>
      </Link>
    </li>
  );
}

export default Stop;

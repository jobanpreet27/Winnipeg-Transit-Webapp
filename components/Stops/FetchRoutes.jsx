import React from "react";
import useFetch from "../Utils/useFetch";

const FetchRoutes = (props) => {
  const { data, loading } = useFetch(
    "https://winnipegtransitserver.herokuapp.com/api/stop-routes/" +
      props.stopKey
  );
  return (
    <div>
      {!loading ? (
        data.map((stop) => {
          return stop["number"] + " ";
        })
      ) : (
        <></>
      )}
    </div>
  );
};
export default FetchRoutes;

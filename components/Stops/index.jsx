import React from "react";
import useFetch from "../Utils/useFetch";
import DisplayStops from "./DisplayStops";
import Loader from "../Utils/Loader";

function Stops(props) {
  console.log(props.url)
  const { data, loading } = useFetch(props.url);
  if (!loading) return <DisplayStops data={data} />;
  else return <Loader />;
}
export default Stops;

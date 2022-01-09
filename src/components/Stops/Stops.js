import React from "react";
import useFetch from "../Utils/useFetch";
import "./stops.css";
import DisplayStops from "./DisplayStops";

function Stops(props) {
  const { data, loading } = useFetch(props.url);
  if (!loading) return <DisplayStops data={data} />;
  else return <h2>Loading</h2>;
}
export default Stops;

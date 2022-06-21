import React from "react";
import Header from "./Header";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="Winnipeg Transit WebApp"
          content="Winnipeg Buses timetable"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}
        <title>Winnipeg Transit Webapp </title>
        <meta
          name="Description"
          content="Check the live bus timetable of the transit stops near your in Winnipeg ."
        />
        <meta
          name="Keywords"
          content="Winnipeg Transit, Winnipeg Bus timetable"
        />
      </Head>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
}

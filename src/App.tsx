import React, { useContext, useEffect } from "react";

import { Store } from "./Store";
import { Link } from "@reach/router";

export default function App(props: any): JSX.Element {
  const { state } = useContext(Store);

  return (
    <>
      <header className="header">
        <h1>Rick and Morty</h1>
        <p>Pick your favourite episodes!</p>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/faves">Favourites : {state.favourites.length}</Link>
        </nav>
      </header>
      {props.children}
    </>
  );
}

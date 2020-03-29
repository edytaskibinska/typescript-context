import React, { useContext, useEffect } from "react";

import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import { fetchDataAction, toggleFavouriteAction } from "./Actions";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

export default function HomePage(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavouriteAction,
    favourites: state.favourites
  };

  return (
    <>
      <React.Suspense fallback={<div>Loading...</div>}>
        <ul className="episode-layout">
          <EpisodeList {...props} />
        </ul>
      </React.Suspense>
    </>
  );
}

import React, { useContext, useEffect } from "react";

import { Store } from "./Store";
import { toggleFavouriteAction } from "./Actions";
import { IEpisodeProps } from "./interfaces";

const EpisodeList = React.lazy<any>(() => import("./EpisodesList"));

export default function FavPage(): JSX.Element {
  const { state, dispatch } = useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.favourites,
    store: { state, dispatch },
    toggleFavouriteAction,
    favourites: state.favourites
  };
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <ul className="episode-layout">
        <EpisodeList {...props} />
      </ul>
    </React.Suspense>
  );
}

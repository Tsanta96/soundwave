import React from "react";
import { Route } from "react-router-dom";
import { ProtectedRoute } from "../utils/route_utils";
import NavBarContainer from "./nav_bar/nav_bar_container";
import HomeContainer from "./home/home_container";
import Modal from "./modal/modal.jsx";
import UploadTrackContainer from "./upload_nav/upload_track_container";
import YouTracksContainer from "./upload_nav/you_tracks_container";
import TrackIndexContainer from "./tracks/track_index_container";
import MusicPlayerContainer from "./music_player/music_player_container";
import CommentsContainer from "./comments/comments_container";
import UpgradeComponent from "./upgrade/upgrade";
import SearchResultsContainer from "./search/search_results_container";
import LibraryContainer from "./library/library_containter";

const App = () => {
  return (
    <div>
      <Modal />
      <Route path="/nav/" component={NavBarContainer} />
      <Route path="/nav/" component={MusicPlayerContainer} />
      <div className="body-view">
        <Route exact path="/" component={HomeContainer} />
        <Route path="/nav/upload" component={UploadTrackContainer} />
        <Route path="/nav/you/tracks" component={YouTracksContainer} />
        <ProtectedRoute path="/nav/tracks" component={TrackIndexContainer} />
        <Route path="/nav/track/comments/:id" component={CommentsContainer} />
        <Route path="/nav/upgrade" component={UpgradeComponent} />
        <Route
          path="/nav/search/:searchString"
          component={SearchResultsContainer}
        />
        <Route path="/nav/library" component={LibraryContainer} />
      </div>
    </div>
  );
};

export default App;

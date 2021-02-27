import React, { Component } from "react";
import youtube from "../../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "../ImagesDisplay/VideoDetail";

class VideoDisplayApp extends Component {
  state = { videos: [], selectedVideo: null };

  handleTermSubmit = async (term) => {
    const { data } = await youtube.get("/search", {
      params: { q: term },
    });

    this.setState({ videos: data.items, selectedVideo: data.items[0] });
  };

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  componentDidMount() {
    this.handleTermSubmit("music").catch((error) => console.dir(error.message));
  }

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.handleTermSubmit} />
        <div className="ui grid">
          <div
            className={
              this.state.videos.length
                ? "eleven wide column"
                : "five wide column"
            }
          >
            <VideoDetail video={this.state.selectedVideo} />
          </div>
          <div className=" five wide column">
            <VideoList
              videos={this.state.videos}
              onVideoSelect={this.handleVideoSelect}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default VideoDisplayApp;

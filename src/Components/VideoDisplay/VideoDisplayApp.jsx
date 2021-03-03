import React, { useState, useEffect } from "react";
import useVideos from "../../hooks/useVideos";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

function VideoDisplayApp() {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, searchVideos] = useVideos("cats");

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div>
      <SearchBar onTermSubmit={searchVideos} />
      <div className="ui grid">
        <div
          className={videos.length ? "eleven wide column" : "five wide column"}
        >
          <VideoDetail video={selectedVideo} />
        </div>
        <div className=" five wide column">
          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
        </div>
      </div>
    </div>
  );
}

export default VideoDisplayApp;

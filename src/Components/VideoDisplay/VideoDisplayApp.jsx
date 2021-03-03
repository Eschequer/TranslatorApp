import React, { useState, useEffect } from "react";
import youtube from "../../api/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

function VideoDisplayApp() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    handleTermSubmit().catch((error) => console.dir(error.message));
  }, []);

  async function handleTermSubmit(term) {
    const { data } = await youtube.get("/search", {
      params: { q: term },
    });

    setVideos(data.items);
    setSelectedVideo(data.items[0]);
  }

  return (
    <div>
      <SearchBar onTermSubmit={handleTermSubmit} />
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

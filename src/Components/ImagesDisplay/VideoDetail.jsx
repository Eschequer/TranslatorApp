import React from "react";

function VideoDetail({ video }) {
  if (!video) {
    return (
      <div>
        <div className="ui active inline loader tiny" />
        <span style={{ padding: "10px" }}>Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <div className="ui embed">
        <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoDetail;

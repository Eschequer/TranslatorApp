import React from "react";
import styles from "./VideoItem.module.css";

// eslint-disable-next-line no-unused-vars
function VideoItem({ video, onVideoSelect }) {
  const {
    snippet: {
      title,
      thumbnails: {
        medium: { url },
      },
    },
  } = video;

  return (
    <div
      className={`item ${styles.videoItem}`}
      onClick={() => onVideoSelect(video)}
    >
      <img src={url} alt={title} className="ui small image" />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
}

export default VideoItem;

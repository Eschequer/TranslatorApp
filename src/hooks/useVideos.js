import { useState, useEffect } from "react";
import youtube from "../api/youtube";

function useVideos(defaultSearchTerm) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    if (defaultSearchTerm) {
      searchVideos(defaultSearchTerm).catch((error) =>
        console.dir(error.message)
      );
    }
  }, []);

  async function searchVideos(term) {
    const { data } = await youtube.get("/search", {
      params: { q: term },
    });

    setVideos(data.items);
  }

  return [videos, searchVideos];
}

export default useVideos;

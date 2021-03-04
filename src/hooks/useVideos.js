import { useState, useEffect } from "react";
import youtube from "../api/youtube";
import axios from "axios";

function useVideos(defaultSearchTerm) {
  const [videos, setVideos] = useState([]);
  const source = axios.CancelToken.source();

  useEffect(() => {
    if (defaultSearchTerm) {
      searchVideos(defaultSearchTerm).catch((error) =>
        console.dir(error.message)
      );
    }

    return () => source.cancel("cancelled searchVideos");
  }, []);

  async function searchVideos(term) {
    const { data } = await youtube.get("/search", {
      params: { q: term, source: source.token },
    });

    setVideos(data.items);
  }

  return [videos, searchVideos];
}

export default useVideos;

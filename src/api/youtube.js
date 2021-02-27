const KEY = "AIzaSyAxiUnOhHjjMOAX0d6rJS-46HZ3Y23gh9c";

import axios from "axios";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});

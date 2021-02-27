import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID YEaAYSk4rasZoS1sQSrTbs3GNVwoDpkS80axg9eoomA",
  },
  /*  params: {
    client_id: "YEaAYSk4rasZoS1sQSrTbs3GNVwoDpkS80axg9eoomA",
  },*/
});

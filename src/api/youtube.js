import axios from "axios";

const KEY = "AIzaSyCVmvb6JtpA32Ml9XIR9dMbqk_98lG5e7Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});

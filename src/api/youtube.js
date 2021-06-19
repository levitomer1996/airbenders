import axios from "axios";
const key = "AIzaSyD5MZuG9O2_E3DDPo0qky3udBdAE-Bgevc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "contentDetails",
    playlistId: "UUUXFUTEthy54_QVDJvSQFdQ",

    key: key,
  },
});

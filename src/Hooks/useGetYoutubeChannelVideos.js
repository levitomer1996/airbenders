import React, { useState } from "react";
import youtube from "../api/youtube";

export default () => {
  const [videos, setVideos] = useState([]);
  const [spinner, setSpinner] = useState(false);

  const getYoutubeChannelVideos = async () => {
    try {
      setSpinner(true);
      const res = await youtube.get("/playlistItems");
      console.log(res.data);
      var newlist = [];
      res.data.items.map((item) => {
        newlist.push(item.contentDetails.videoId);
      });
      setVideos(newlist);
      setSpinner(false);
      console.log(videos);
    } catch (error) {
      setSpinner(false);
    }
  };
  return [videos, getYoutubeChannelVideos, spinner];
};

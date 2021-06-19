import React from "react";
import YouTube from "react-youtube";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down("sm")]: { width: "100%" },
  },
}));

const YoutubePlayer = ({ link }) => {
  const classes = useStyles();
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts = {
    height: "400",
    width: "500",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId={link}
      opts={opts}
      className={classes.root}
      onReady={_onReady}
    />
  );
};

export default YoutubePlayer;

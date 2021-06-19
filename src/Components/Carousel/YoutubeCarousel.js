import { ListItemAvatar } from "@material-ui/core";
import React from "react";
import { Carousel } from "react-bootstrap";
import useStyles from "../../useStyles";
import YoutubePlayer from "../YoutubePlayer.js/YoutubePlayer";
const YoutubeCarousel = ({ list }) => {
  const classes = useStyles();
  return (
    <Carousel fade className={classes.youtube_carousel_root}>
      {list.map((vid) => {
        return (
          <Carousel.Item style={{ width: "100%" }}>
            <YoutubePlayer link={vid} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default YoutubeCarousel;

import React from "react";
import { Carousel } from "react-bootstrap";
import { Button } from "@material-ui/core";
import useStyles from "../../useStyles";
const BootstapCarousel = ({ list }) => {
  const classes = useStyles();
  return (
    <Carousel
      fade
      className={classes.carousel_root}
      interval={3000}
      controls={true}
    >
      {list.map((photo) => {
        return (
          <Carousel.Item>
            <img
              className={classes.carousel_img}
              src={photo}
              alt="First slide"
            ></img>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default BootstapCarousel;

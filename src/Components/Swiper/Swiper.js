import React from "react";

import { Swiper, SwiperSlide, Au } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

import { Icon, InlineIcon } from "@iconify/react";
import spotifyIcon from "@iconify-icons/mdi/spotify";
import YoutubePlayer from "../YoutubePlayer.js/YoutubePlayer";

import { IconButton, makeStyles, Typography } from "@material-ui/core";
import FacebookIcon from "../Icons/FacebookIcon";
import InstagramIcon from "../Icons/InstagramIcon";
import YoutubeIcon from "../Icons/YoutubeIcon";
import Opentab from "../../Helpers/Opentab";

import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

//Intall swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const useStyles = makeStyles((theme) => ({
  swiper_root: {
    width: (styleProps) => styleProps.width,
    padding: 50,
  },
  swiper_icon: {
    color: "#ca6a6a",
    width: 100,
    height: 100,
    "&:hover": { color: "white" },
  },
  swiper_title: {
    fontSize: "2rem",
    color: "white",
    fontFamily: "'Recursive', sans-serif",
  },
}));
export default ({ type, title, list, width }) => {
  const styleProps = { width: width ? width : null };
  const classes = useStyles(styleProps);

  if (type === "icon") {
    return (
      <div className={classes.swiper_root} style={{ padding: "4rem" }}>
        {title ? (
          <Typography className={classes.swiper_title}>{title}</Typography>
        ) : null}
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <IconButton
              style={{ position: "absolute", top: "0" }}
              onClick={() =>
                Opentab("https://www.facebook.com/AirBendersOfficial")
              }
              style={{}}
            >
              <FacebookIcon className={classes.swiper_icon} />
            </IconButton>
          </SwiperSlide>
          <SwiperSlide>
            <IconButton
              onClick={() =>
                Opentab(
                  "https://www.instagram.com/airbenders_official/?fbclid=IwAR24_SQzBb5KWSrBFxxLN29wVEIuxPQ_RjAUILnMEtpRiRhvsUdlynWQNvw"
                )
              }
            >
              <InstagramIcon />
            </IconButton>
          </SwiperSlide>
          <SwiperSlide>
            <IconButton
              onClick={() =>
                Opentab(
                  "https://open.spotify.com/artist/0Ef2jHAFFzpy5vGtVn5Hqj"
                )
              }
            >
              <Icon icon={spotifyIcon} className={classes.swiper_icon} />
            </IconButton>
          </SwiperSlide>
          <SwiperSlide>
            <IconButton
              onClick={() => {
                Opentab(
                  "https://www.youtube.com/channel/UCUXFUTEthy54_QVDJvSQFdQ?view_as=subscriber"
                );
              }}
            >
              <YoutubeIcon className={classes.swiper_icon} />
            </IconButton>
          </SwiperSlide>
        </Swiper>
      </div>
    );
  }
  if (type === "img") {
    return (
      <div className={classes.swiper_root}>
        {title ? (
          <Typography className={classes.swiper_title}>{title}</Typography>
        ) : null}
        <Swiper
          spaceBetween={10}
          slidesPerView={2}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
        >
          {list.map((link) => {
            return (
              <SwiperSlide>
                <img src={link} style={{ width: "100%", height: 500 }} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }
  if (type == "youtube") {
    return (
      <div className={classes.swiper_root}>
        <Swiper spaceBetween={0} slidesPerView={2} autoplay={true}>
          {list.map((link) => {
            return (
              <SwiperSlide>
                <YoutubePlayer link={link} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }
};

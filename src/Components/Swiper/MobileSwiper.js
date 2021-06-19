import { Swiper, SwiperSlide } from "swiper/react";

import { Icon, InlineIcon } from "@iconify/react";
import spotifyIcon from "@iconify-icons/mdi/spotify";
import YoutubePlayer from "../YoutubePlayer.js/YoutubePlayer";
// Import Swiper styles
import "swiper/swiper.scss";
import { IconButton, makeStyles, Typography } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Opentab from "../../Helpers/Opentab";
const useStyles = makeStyles((theme) => ({
  swiper_root: {
    width: (styleProps) => styleProps.width,
  },
  swiper_icon: {
    color: "#ca6a6a",
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
      <div className={classes.swiper_root} style={{ paddin: "4rem" }}>
        {title ? (
          <Typography className={classes.swiper_title}>{title}</Typography>
        ) : null}
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <IconButton
              onClick={() =>
                Opentab("https://www.facebook.com/AirBendersOfficial")
              }
            >
              <FacebookIcon
                className={classes.swiper_icon}
                style={{ width: 100, height: 100 }}
              />
            </IconButton>
          </SwiperSlide>
          <SwiperSlide>
            <IconButton>
              <InstagramIcon
                className={classes.swiper_icon}
                style={{ width: 100, height: 100 }}
                onClick={() =>
                  Opentab(
                    "https://www.instagram.com/airbenders_official/?fbclid=IwAR24_SQzBb5KWSrBFxxLN29wVEIuxPQ_RjAUILnMEtpRiRhvsUdlynWQNvw"
                  )
                }
              />
            </IconButton>
          </SwiperSlide>
          <SwiperSlide>
            <IconButton>
              <Icon
                icon={spotifyIcon}
                className={classes.swiper_icon}
                style={{ width: 100, height: 100 }}
              />
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
              <YouTubeIcon
                className={classes.swiper_icon}
                style={{ width: 100, height: 100 }}
              />
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
        <Swiper spaceBetween={10} slidesPerView={1} autoplay={2000}>
          {list.map((link) => {
            return (
              <SwiperSlide>
                <img src={link} style={{ width: "100%", height: 400 }} />
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
        <Swiper spaceBetween={0} slidesPerView={1} autoplay={true}>
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

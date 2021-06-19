import React from "react";
import Swiper from "../../Components/Swiper/Swiper";
import useStyles from "../../useStyles";
import photoList from "./comps/photoList";
import MobileSwiper from "../../Components/Swiper/MobileSwiper";
import MobileSocialIcons from "./comps/MobileSocialIcons";
import BootstapCarousel from "../../Components/Carousel/Carousel";
import BiographyParallex from "./comps/BiographyParallex";

import BiographyParallexMobile from "./MobileComps/BiographyParallexMobile";
import IndexAnnouncements from "./comps/IndexAnnouncements";

const Indexpage = () => {
  const classes = useStyles();
  return (
    <>
      <div className={classes.indexpage_root}>
        <BiographyParallex />
        <Swiper
          type="icon"
          title="Follow us and stay tuned"
          width={"80%"}
          slidesPerView={5}
          spaceBetween={50}
        />{" "}
        <IndexAnnouncements />
        <Swiper list={photoList} type="img" width="100%" />
        {/* <YoutubeCarousel list={youtubeList} /> */}
      </div>
      <div className={classes.indexpage_root_mobile}>
        <BiographyParallexMobile />
        <MobileSocialIcons />
        <BootstapCarousel list={photoList} />
      </div>
    </>
  );
};

export default Indexpage;

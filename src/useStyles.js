import React from "react";
import { makeStyles, StylesProvider } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  //Common
  common_title: {
    fontSize: (styles) => (styles.fontSize ? styles.fontSize : "2rem"),
    color: (styles) => (styles.color ? styles.color : "white"),
    fontFamily: "'Recursive', sans-serif",
  },
  //APP ROOT
  root: {
    justifyContent: "center",
    alignItems: "center",
  },
  child: { zIndex: 100 },

  //Header
  header_root: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  header_top_div: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 30,
  },
  header_social_icons_div: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "center",
  },
  header_logo_div: {
    padding: 200,
  },
  header_logo: {
    width: 300,
    height: 50,
    transition: "width 0.5s, height 0.5s",
    "&:hover": {
      width: 320,
      height: 70,
    },
  },
  header_nav: {
    display: "flex",
    flexDirection: "",
  },
  header_nav_a: {
    padding: 50,
    color: "white",
    textDecoration: "none",
    "&:hover": {
      backgroundColor: "rgb(202, 106, 106)",
      transition: "background 0.5s",
      color: "white",
      textDecoration: "none",
    },
  },
  //Mobile header
  mobile_Header: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 30,
    },
  },
  mobile_header_logo: { width: 250, height: 50 },

  //indexpage
  indexpage_root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  indexpage_root_mobile: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },
  index_swiper_youtube: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "85%",
  },
  indexpage_mobile_root_socialicons: {
    color: "rgb(202, 106, 106)",
    width: 60,
    height: 60,
  },
  indexpage_mobile_root_socialicons_title: {
    fontSize: 21,
    color: "white",
    fontFamily: "'Recursive', sans-serif",
  },

  //carousel
  carousel_root: {
    width: "80%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  carousel_img: {
    width: "100%",
    height: 600,
    [theme.breakpoints.down("sm")]: {
      height: 300,
    },
  },
  youtube_carousel_root: {},
  //Contact us
}));

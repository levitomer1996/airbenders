import React from "react";
import { Typography, Grid, makeStyles } from "@material-ui/core";
import YoutubePlayer from "../../../Components/YoutubePlayer.js/YoutubePlayer";
const useStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
    marginBottom: 30,
    [theme.breakpoints.down("sm")]: { width: "100%" },
  },
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      alignItems: "center",
      justifyContent: "center",
      borderBottom: "rgb(202, 106, 106) 0.5px solid",
      padding: 10,
    },
  },
}));
const AnnouncementPost = ({ date, text, link }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <div className={classes.container}>
        <Typography style={{ color: "white", textDecoration: "underline" }}>
          {date}
        </Typography>
        <Typography style={{ color: "white" }}>{text}</Typography>
        <YoutubePlayer link={link} />
      </div>
    </Grid>
  );
};

export default AnnouncementPost;

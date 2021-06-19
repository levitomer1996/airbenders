import React from "react";
import AnnouncementPost from "./Comps/AnnouncementPost";
import YoutubePlayer from "../../Components/YoutubePlayer.js/YoutubePlayer";
import { Grid, Typography } from "@material-ui/core";
import AnnouncementsList from "./Comps/AnnouncementsList";
const AnnouncementPage = () => {
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      {AnnouncementsList.map(({ text, link, date, id }) => (
        <AnnouncementPost text={text} link={link} date={date} key={id} />
      ))}
    </Grid>
  );
};

export default AnnouncementPage;

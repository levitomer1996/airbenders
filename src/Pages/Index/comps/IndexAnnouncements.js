import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import AnnouncementsList from "../../Announcement/Comps/AnnouncementsList";
const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 40,
    color: "white",
    fontFamily: "'Recursive', sans-serif",
  },
}));

const IndexAnnouncements = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="flex-start"
      style={{ width: "80%" }}
    >
      <Grid item>
        <Typography className={classes.title}>Announcements:</Typography>
      </Grid>
      <Grid item>
        <Grid item>
          <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="flex-start"
            spacing={3}
          >
            {AnnouncementsList.map(({ text }) => (
              <Grid
                item
                style={{ color: "white", width: "30%", height: "10%" }}
              >
                <Typography>{text}</Typography>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default IndexAnnouncements;

import React from "react";

import { IconButton, makeStyles, Typography, Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Icon, InlineIcon } from "@iconify/react";
import spotifyIcon from "@iconify-icons/mdi/spotify";
import useStyles from "../../../useStyles";
import Opentab from "../../../Helpers/Opentab";
const MobileSocialIcons = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      style={{ padding: "20px 0px" }}
    >
      {" "}
      <Grid item>
        <Typography
          style={{
            fontSize: 21,
            color: "white",
            fontFamily: "'Recursive', sans-serif",
          }}
        >
          Follow us and stay tuned
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            <IconButton
              onClick={() =>
                Opentab("https://www.facebook.com/AirBendersOfficial")
              }
            >
              <FacebookIcon
                className={classes.indexpage_mobile_root_socialicons}
                style={{ width: 60, height: 60 }}
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() =>
                Opentab(
                  "https://www.instagram.com/airbenders_official/?fbclid=IwAR24_SQzBb5KWSrBFxxLN29wVEIuxPQ_RjAUILnMEtpRiRhvsUdlynWQNvw"
                )
              }
            >
              <InstagramIcon
                className={classes.indexpage_mobile_root_socialicons}
                style={{ width: 60, height: 60 }}
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() => {
                Opentab(
                  "https://www.youtube.com/channel/UCUXFUTEthy54_QVDJvSQFdQ?view_as=subscriber"
                );
              }}
            >
              <YouTubeIcon
                className={classes.indexpage_mobile_root_socialicons}
                style={{ width: 60, height: 60 }}
              />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              onClick={() =>
                Opentab(
                  "https://open.spotify.com/artist/0Ef2jHAFFzpy5vGtVn5Hqj"
                )
              }
            >
              <Icon
                icon={spotifyIcon}
                className={classes.indexpage_mobile_root_socialicons}
                style={{ width: 60, height: 60 }}
              />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MobileSocialIcons;

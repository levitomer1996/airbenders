import React from "react";
import spotifyIcon from "@iconify-icons/mdi/spotify";
import { Icon, InlineIcon } from "@iconify/react";
import { IconButton, makeStyles, Typography, Grid } from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Opentab from "../../../Helpers/Opentab";
const useStyles = makeStyles((theme) => ({
  root: { [theme.breakpoints.down("md")]: { display: "none" } },
  icon: { color: "rgb(202, 106, 106)" },
}));

const SocialIcons = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton
        onClick={() => Opentab("https://www.facebook.com/AirBendersOfficial")}
      >
        <FacebookIcon className={classes.icon} />
      </IconButton>
      <IconButton
        onClick={() =>
          Opentab("https://www.instagram.com/airbenders_official/")
        }
      >
        <InstagramIcon className={classes.icon} />
      </IconButton>{" "}
      <IconButton
        onClick={() =>
          Opentab("https://open.spotify.com/artist/0Ef2jHAFFzpy5vGtVn5Hqj")
        }
      >
        <Icon icon={spotifyIcon} className={classes.icon} />
      </IconButton>
      <IconButton
        onClick={() =>
          Opentab(
            "https://www.youtube.com/channel/UCUXFUTEthy54_QVDJvSQFdQ?view_as=subscriber"
          )
        }
      >
        <YouTubeIcon className={classes.icon} />
      </IconButton>
    </div>
  );
};

export default SocialIcons;

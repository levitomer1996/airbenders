import React from "react";
import { Icon, InlineIcon } from "@iconify/react";
import spotifyIcon from "@iconify-icons/mdi/spotify";
import { useStyles } from "./iconsStyles";
export default ({ color, height, width }) => {
  const classes = useStyles({ color, height, width });
  return (
    <>
      <Icon icon={spotifyIcon} className={classes.root} />{" "}
    </>
  );
};

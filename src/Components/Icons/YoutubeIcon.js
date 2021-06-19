import React from "react";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { useStyles } from "./iconsStyles";
export default ({ color, height, width }) => {
  const classes = useStyles({ color, height, width });
  return (
    <>
      <YouTubeIcon className={classes.root} />{" "}
    </>
  );
};

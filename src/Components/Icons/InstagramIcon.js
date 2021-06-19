import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useStyles } from "./iconsStyles";
export default ({ color, height, width }) => {
  const classes = useStyles({ color, height, width });
  return (
    <>
      <InstagramIcon className={classes.root} />{" "}
    </>
  );
};

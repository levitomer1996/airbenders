import React from "react";
import { useStyles } from "./iconsStyles";
import FacebookIcon from "@material-ui/icons/Facebook";
export default ({ color, height, width }) => {
  const classes = useStyles({ color, height, width });
  return (
    <>
      <FacebookIcon className={classes.root} />
    </>
  );
};

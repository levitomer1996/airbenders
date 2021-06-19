import React from "react";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import { useStyles } from "./iconsStyles";
export default ({ color, height, width }) => {
  const classes = useStyles({ color, height, width });
  return (
    <>
      <WhatsAppIcon className={classes.root} />{" "}
    </>
  );
};

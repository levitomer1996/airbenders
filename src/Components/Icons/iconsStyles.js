import React from "react";
import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles((theme) => ({
  root: {
    color: ({ color }) => (color ? color : "#ca6a6a"),
    width: ({ width }) => (width ? width : 100),
    height: ({ height }) => (height ? height : 100),
    "&:hover": { color: "white" },
  },
}));

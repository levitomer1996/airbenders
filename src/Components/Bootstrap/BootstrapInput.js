import React, { useEffect, useContext } from "react";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { withStyles, fade, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  textArea: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: theme.width ? theme.width : "auto",
    padding: "10px 12px",

    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const Input = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.common.white,
    border: "1px solid #ced4da",
    fontSize: 16,
    width: theme.width ? theme.width : "auto",
    padding: "10px 12px",

    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

export default function BootStrapInput({
  type,
  label,
  width,
  onChangeFunction,
  rows,
  textArea,
  value,
}) {
  const classes = useStyles();
  if (textArea) {
    return (
      <FormControl>
        <InputLabel
          shrink
          htmlFor="bootstrap-input"
          style={{
            textAlign: "right",
            fontFamily: "'Recursive', sans-serif",
            color: "white",
          }}
        >
          {label}
        </InputLabel>
        <textarea
          className={classes.textArea}
          row={rows}
          placeholder={label}
          value={value}
          onChange={(e) => {
            onChangeFunction(e.target.value);
          }}
        ></textarea>
      </FormControl>
    );
  } else {
    return (
      <FormControl>
        <InputLabel
          shrink
          htmlFor="bootstrap-input"
          style={{
            fontFamily: "'Recursive', sans-serif",
            color: "white",
            fontSize: "1.5rem",
          }}
        >
          {label}
        </InputLabel>
        <Input
          type={type}
          style={{ width: width ? width : "auto" }}
          onChange={
            type === "file"
              ? (e) => {
                  onChangeFunction(e);
                }
              : (e) => {
                  onChangeFunction(e.target.value);
                }
          }
          rows={rows ? rows : 1}
          value={value}
        />
      </FormControl>
    );
  }
}

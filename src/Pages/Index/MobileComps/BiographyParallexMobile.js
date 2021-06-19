import React from "react";
import { makeStyles, Button } from "@material-ui/core";
import Opentab from "../../../Helpers/Opentab";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage:
      "url(https://i.ibb.co/zV35vvL/photomania-a7f1668b78cadb094590547522285cea.jpg)",
    width: "100%",
    height: 300,
    display: "flex",
    flexDirection: "column",
    backgroundRepeat: "round",
    alignItems: "center",
    justifyContent: "center",
  },
  index_parallex_btn: {
    backgroundColor: "rgb(202, 106, 106)",
    fontFamily: "'Recursive', sans-serif",
    fontSize: 15,
    "&:hover": {
      backgroundColor: "rgb(255 61 0)",
    },
  },
}));
const BiographyParallexMobile = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {" "}
      <Button
        variant="contained"
        color="primary"
        className={classes.index_parallex_btn}
        onClick={() =>
          Opentab(
            "https://www.youtube.com/watch?v=Q9vnWYAnVE0&t=596s&ab_channel=AirBenders"
          )
        }
      >
        Check out our latest set
      </Button>
    </div>
  );
};

export default BiographyParallexMobile;

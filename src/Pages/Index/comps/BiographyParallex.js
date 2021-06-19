import React, { useEffect, useState } from "react";

import { Button, makeStyles } from "@material-ui/core";
import Opentab from "../../../Helpers/Opentab";
const useStyles = makeStyles((theme) => ({
  index_parallex: {
    backgroundImage:
      "url(https://i.ibb.co/zV35vvL/photomania-a7f1668b78cadb094590547522285cea.jpg)",

    width: "100%",
    minHeight: "500px",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
      minHeight: "500px",
    },
  },
  button_div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  eilam_pointer: {
    width: (eilam_Pointer_Style) => eilam_Pointer_Style.width,
    height: 200,
    transition: "width 0.5s",
  },
  index_parallex_btn: {
    backgroundColor: "rgb(202, 106, 106)",
    fontFamily: "'Recursive', sans-serif",
    fontSize: 30,

    "&:hover": {
      backgroundColor: "rgb(255 61 0)",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 15,
    },
  },
}));
export default () => {
  const [eilam_Pointer_Style, setPointerStyle] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const btn = document.getElementById("btn");
    btn.addEventListener("mouseover", () => {
      setPointerStyle({ width: 150, height: 200 });
    });
    btn.addEventListener("mouseout", () => {
      setPointerStyle({ width: 0, height: 0 });
    });
  }, []);
  const classes = useStyles(eilam_Pointer_Style);
  return (
    <div className={classes.index_parallex}>
      <div className={classes.button_div}>
        <img
          src={`https://i.ibb.co/HBMW4F1/Eilam-The-Gay.png`}
          className={classes.eilam_pointer}
        />

        <Button
          variant="contained"
          color="primary"
          className={classes.index_parallex_btn}
          id="btn"
          onClick={() =>
            Opentab(
              "https://www.youtube.com/watch?v=Q9vnWYAnVE0&t=596s&ab_channel=AirBenders"
            )
          }
        >
          Check out our latest set
        </Button>
      </div>
    </div>
  );
};

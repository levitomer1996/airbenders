import React, { useContext } from "react";
import AuthContext from "../../Context/AuthContext";
import Signin from "./Comps/Signin";
import { makeStyles, CircularProgress, Grid } from "@material-ui/core";
import Manage from "./Comps/Manage";
const useStyles = makeStyles((theme) => ({
  submit_button: {
    fontFamily: "'Recursive', sans-serif",
    color: "white",
    fontWeight: "bold",
    backgroundColor: "rgb(202, 106, 106)",
    padding: 20,
    "&:hover": { backgroundColor: "black" },
  },
  spinner: { width: 200, height: 200, color: "rgb(202, 106, 106)" },
}));

const ManagingPage = ({ initialzingDone }) => {
  const { authState } = useContext(AuthContext);
  if (initialzingDone) {
    if (!authState.isLogged) {
      return <Signin />;
    }
    return <Manage />;
  } else {
    return (
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item>
          <CircularProgress />
        </Grid>
      </Grid>
    );
  }
};

export default ManagingPage;

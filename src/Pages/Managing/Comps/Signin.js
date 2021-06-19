import React, { useState, useContext } from "react";
import BootstrapInput from "../../../Components/Bootstrap/BootstrapInput";
import { makeStyles, Button, Grid } from "@material-ui/core";
import abserver from "../../../api/abserver";
import AuthContext from "../../../Context/AuthContext";
import CircularProgress from "@material-ui/core/CircularProgress";

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

export default () => {
  const classes = useStyles();
  const [phone_number, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [err, setErr] = useState(false);
  const { Signin } = useContext(AuthContext);

  const handleSubmit = async () => {
    try {
      setSpinner(true);
      const res = await abserver.post("/auth/signin", {
        phone_number,
        password,
      });
      localStorage.setItem("ut", res.data.accessToken);
      Signin(res.data.user);
      setSpinner(false);
    } catch (error) {
      setSpinner(false);
      setErr(true);
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Grid container direction="column" justify="center" alignItems="center">
        <Grid item style={{ marginBottom: 30 }}>
          <BootstrapInput
            type="tel"
            label="Phone number"
            onChangeFunction={setPhoneNumber}
          />
        </Grid>
        <Grid item style={{ marginBottom: 30 }}>
          <BootstrapInput
            type="password"
            label="Password"
            onChangeFunction={setPassword}
          />
        </Grid>
        <Grid item style={{ marginBottom: 30 }}>
          <Button
            variant="contained"
            color="primary"
            className={classes.submit_button}
            type={"submit"}
          >
            Sign in
          </Button>
        </Grid>
        {spinner ? (
          <Grid item>
            {" "}
            <CircularProgress
              className={classes.spinner}
              style={{ width: 100, height: 100 }}
            />
          </Grid>
        ) : null}
      </Grid>
    </form>
  );
};

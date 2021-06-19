import React, { useState } from "react";
import BootStrapInput from "../../Bootstrap/BootstrapInput";
import Opentab from "../../../Helpers/Opentab";
import { makeStyles, Button, Grid } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom/cjs/react-dom.development";
import abserver from "../../../api/abserver";

export default ({ params }) => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [phone_number, setPhoneNumber] = useState(null);
  const [err, setErr] = useState(null);
  const { invatation_message } = params;

  const sendInvatation = async () => {
    //Validate inputs
    if (!firstName || !lastName || !phone_number) {
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 3000);
      return;
    }
    await abserver.post("/createinvataion", {});

    const phone_adress = `972${phone_number.substring(1)}`;
    Opentab(
      `https://api.whatsapp.com/send/?phone=${phone_adress}&text=${invatation_message}&app_absent=0`
    );
  };
  return (
    <form>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item>
          <BootStrapInput
            label={"First name"}
            type={"text"}
            onChangeFunction={setFirstName}
          />
        </Grid>
        <Grid item>
          <BootStrapInput
            label={"Last name"}
            type={"text"}
            onChangeFunction={setLastName}
          />
        </Grid>
        <Grid item>
          <BootStrapInput
            label={"Phone number"}
            type={"tel"}
            onChangeFunction={setPhoneNumber}
          />
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              sendInvatation();
            }}
          >
            Send invatation
          </Button>
        </Grid>
        {err ? (
          <Grid item>
            <Typography style={{ color: "white" }}>
              Please fill the inputs
            </Typography>
          </Grid>
        ) : null}
      </Grid>
    </form>
  );
};

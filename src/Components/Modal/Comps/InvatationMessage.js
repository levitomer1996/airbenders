import React, { useContext, useEffect, useState } from "react";
import BootStrapInput from "../../Bootstrap/BootstrapInput";
import { Grid, Button, CircularProgress } from "@material-ui/core";
import abserver from "../../../api/abserver";
import getToken from "../../../Hooks/getToken";
import ModalContext from "../../../Context/ModalContext";
const InvatationMessage = ({ params }) => {
  const [message, setMessage] = useState(null);
  const [spinner, setSpinner] = useState(false);
  const { invatation_message } = params;
  const { closeModal } = useContext(ModalContext);

  var token = getToken();
  const updateMessage = async () => {
    try {
      setSpinner(true);
      await abserver.post(
        "/party/updateinvatationmessage",
        { message },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSpinner(false);
      closeModal();
    } catch (error) {
      setSpinner(false);
    }
  };
  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      spacing={3}
    >
      <Grid item>
        <BootStrapInput
          textArea
          rows={30}
          onChangeFunction={setMessage}
          value={message === null ? invatation_message : message}
        />
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          color="primary"
          onClick={() => updateMessage()}
        >
          Set message
        </Button>
      </Grid>
      {spinner ? (
        <Grid item>
          <CircularProgress />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default InvatationMessage;

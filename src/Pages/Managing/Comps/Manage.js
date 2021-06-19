import React, { useContext, useEffect } from "react";
import * as moment from "moment";
import useGetUserParty from "../../../Hooks/useGetUserParty";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Participants from "./Participants";
import {
  makeStyles,
  CircularProgress,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import ModalContext from "../../../Context/ModalContext";
import AuthContext from "../../../Context/AuthContext";

const useStyles = makeStyles((theme) => ({
  date_title: {
    color: "white",
    fontSize: "2rem",
    fontFamily: "'Recursive', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  participants_title: {
    color: "white",
    fontSize: "2rem",
    fontFamily: "'Recursive', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  btn: {
    fontFamily: "'Recursive', sans-serif",
    backgroundColor: "rgb(202, 106, 106)",
  },
}));
const Manage = () => {
  const [party, getParty, spinner] = useGetUserParty();
  const { openModal } = useContext(ModalContext);

  const classes = useStyles();
  useEffect(() => {
    getParty();
  }, []);

  if (spinner) {
    return <CircularProgress />;
  }
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item style={{ marginBottom: 10 }}>
        <Typography className={classes.date_title}>
          Your party is at -
          {` ${moment(party.date).format("MMMM Do YYYY, h:mm:ss a")}`}
        </Typography>
      </Grid>
      <Grid item>
        {" "}
        <Typography className={classes.participants_title}>
          Participants:
        </Typography>
      </Grid>
      <Grid item>
        {" "}
        <Typography className={classes.participants_title}>
          <Button
            variant="contained"
            onClick={() =>
              openModal({ content: "invatationmessage", params: party })
            }
            color="primary"
            className={classes.btn}
          >
            Set invatation message
          </Button>
        </Typography>
      </Grid>
      <Grid item>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item>
            {" "}
            <Button
              variant="contained"
              onClick={() =>
                openModal({ content: "invitebywhatsapp", params: party })
              }
              color="primary"
              className={classes.btn}
              endIcon={<WhatsAppIcon />}
            >
              Invite by WhatsApp
            </Button>
          </Grid>
        </Grid>
      </Grid>
      {party.participants ? (
        <Grid item>
          <Participants rows={party.participants} />
        </Grid>
      ) : null}
    </Grid>
  );
};

export default Manage;

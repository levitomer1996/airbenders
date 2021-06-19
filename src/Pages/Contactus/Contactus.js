import React from "react";
import useStyles from "../../useStyles";
import {
  Grid,
  Zoom,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";

import FacebookIcon from "@material-ui/icons/Facebook";
import EmailIcon from "@material-ui/icons/Email";
const comopentStyles = makeStyles((theme) => ({
  contact_us_social_icon: {
    width: 100,
    height: 100,
    color: "rgb(202, 106, 106)",
  },
  title: {
    fontSize: "2rem",
    color: "white",
    fontFamily: "'Recursive', sans-serif",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem",
    },
  },
  email_font: {
    fontSize: "1.5rem",
    fontFamily: "'Recursive', sans-serif",
  },
}));
const Contactus = () => {
  const classes = useStyles();
  const c = comopentStyles();
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item style={{ margin: 0, textAlign: "center" }}>
        <Typography className={c.title}>
          Contact us with the next platforms
        </Typography>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
          spacing={5}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                <Typography className={c.title}>Facebook</Typography>
              </Grid>
              <Grid item>
                <Zoom in={true}>
                  <a href="https://www.facebook.com/AirBendersOfficial">
                    <IconButton>
                      <FacebookIcon className={c.contact_us_social_icon} />
                    </IconButton>
                  </a>
                </Zoom>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid item>
                {" "}
                <Typography className={c.title}>Email</Typography>
              </Grid>

              <Grid item>
                <Zoom in={true}>
                  <a href="mailto:airbendersofficial@gmail.com">
                    <IconButton>
                      <EmailIcon className={c.contact_us_social_icon} />
                    </IconButton>
                  </a>
                </Zoom>
              </Grid>
              <Grid item>
                <Grid item>
                  <a
                    href="mailto:airbendersofficial@gmail.com"
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <Typography className={c.email_font}>
                      airbendersofficial@gmail.com
                    </Typography>
                  </a>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contactus;

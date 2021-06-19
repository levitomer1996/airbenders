import React from "react";
import { WhatsappShareButton, FacebookShareButton } from "react-share";
import FacebookIcon from "../../Icons/FacebookIcon";
import WhatsappIcon from "../../Icons/WhatsappIcon";
import { Grid, Typography } from "@material-ui/core";
const ShareModal = ({ params }) => {
  return (
    <Grid
      container
      direction="column"
      justify="flex-start"
      alignItems="center"
      spacing={5}
    >
      <Grid item>
        <Typography
          style={{
            color: "white",
            fontSize: 35,
            fontFamily: "'Recursive', sans-serif",
          }}
        >
          Share with:
        </Typography>
      </Grid>
      <Grid item>
        <FacebookShareButton
          url={`https://www.youtube.com/watch?v=${params.link}`}
        >
          <FacebookIcon />
        </FacebookShareButton>
      </Grid>
      <Grid item>
        <WhatsappShareButton
          url={`https://www.youtube.com/watch?v=${params.link}`}
        >
          <WhatsappIcon />
        </WhatsappShareButton>
      </Grid>
    </Grid>
  );
};

export default ShareModal;

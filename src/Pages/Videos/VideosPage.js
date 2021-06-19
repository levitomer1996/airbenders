import React, { useContext, useEffect } from "react";
import {
  Grid,
  Zoom,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import YoutubePlayer from "../../Components/YoutubePlayer.js/YoutubePlayer";
import youtubeList from "../../Assets/youtubeList";
import useStyles from "../../useStyles";
import useGetYoutubeChannelVideos from "../../Hooks/useGetYoutubeChannelVideos";
import CircularProgress from "@material-ui/core/CircularProgress";
import ShareIcon from "@material-ui/icons/Share";
import ModalContext from "../../Context/ModalContext";

const usePageStyles = makeStyles((theme) => ({
  youtube_item: {
    padding: "30px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  shareButton: { color: "rgb(202, 106, 106)", width: 30, height: 30 },
  shareButton_container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    width: "100%",
  },
}));

const VideosPage = () => {
  const classes = useStyles();
  const { openModal } = useContext(ModalContext);
  const page_classes = usePageStyles();
  const [
    youtubeVideos,
    getYoutubeChannelVideos,
    spinner,
  ] = useGetYoutubeChannelVideos();
  useEffect(() => {
    getYoutubeChannelVideos();
  }, []);

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Typography
          className={classes.common_title}
          style={{
            fontFamily: "'Recursive', sans-serif",
            fontSize: "2rem",
            textAlign: "center",
          }}
        >
          Check out our videos
        </Typography>
        {spinner ? (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            {" "}
            <Grid item>
              <CircularProgress
                style={{ color: "rgb(202, 106, 106)", width: 100, height: 100 }}
              />
            </Grid>
          </Grid>
        ) : null}
      </Grid>
      {youtubeVideos.map((vid) => {
        return (
          <Grid item className={page_classes.youtube_item}>
            <div className={page_classes.shareButton_container}>
              <IconButton
                onClick={() => {
                  openModal({ content: "sharemodal", params: { link: vid } });
                }}
              >
                <ShareIcon className={page_classes.shareButton} />
              </IconButton>
            </div>
            <YoutubePlayer link={vid} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default VideosPage;

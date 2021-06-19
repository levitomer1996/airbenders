import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import ModalContext from "../../Context/ModalContext";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import renderModalContent from "./renderModalContent";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    background:
      "radial-gradient(ellipse at bottom, #1b2735c9 0%, #000000 100%)",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function () {
  const { modalState, closeModal } = useContext(ModalContext);
  const { isOpen, content, params } = modalState;
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        <IconButton onClick={() => closeModal()}>
          <CloseIcon style={{ color: "white" }} />
        </IconButton>
      </div>
      <div>{renderModalContent(content, params)}</div>
    </div>
  );

  return (
    <div>
      <Modal
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}

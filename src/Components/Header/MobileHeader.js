import React from "react";
import useStyles from "../../useStyles";
import MobileMenu from "./MobileComps/MobileMenu";

const MobileHeader = () => {
  const classes = useStyles();

  return (
    <header className={classes.mobile_Header}>
      {" "}
      <a href="/" stlye={{ zIndex: 100 }}>
        <img
          src={"https://i.ibb.co/wcybKzq/Airbenders-Logo.png"}
          className={classes.mobile_header_logo}
        />
      </a>
      <MobileMenu />
    </header>
  );
};

export default MobileHeader;

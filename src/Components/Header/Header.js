import React from "react";
import useStyles from "../../useStyles";
import Nav from "./Comps/Nav";
import SocialIcons from "./Comps/SocialIcons";
import { Grid } from "@material-ui/core";
const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.header_root}>
      <div className={classes.header_top_div}>
        <a href="/" stlye={{ zIndex: 100 }}>
          <img
            src={"https://i.ibb.co/wcybKzq/Airbenders-Logo.png"}
            className={classes.header_logo}
          />
        </a>
        <Nav />
      </div>
      <div>
        <div className={classes.header_social_icons_div}>
          <SocialIcons />
        </div>
      </div>
    </header>
  );
};

export default Header;

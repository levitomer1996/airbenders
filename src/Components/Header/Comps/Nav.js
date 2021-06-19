import React from "react";
import NavList from "../NavList";
import useStyles from "../../../useStyles";
const Nav = () => {
  const classes = useStyles();
  return (
    <nav>
      {NavList.map(({ title, link }) => {
        return (
          <a href={link} className={classes.header_nav_a}>
            {title}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;

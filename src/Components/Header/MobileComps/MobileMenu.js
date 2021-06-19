import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import NavList from "../NavList";
import { IconButton, MenuItem, Menu } from "@material-ui/core";
import { Link } from "react-router-dom";
const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ float: "right" }}>
      <IconButton>
        <MenuIcon
          onClick={handleClick}
          style={{ color: "#ca6a6a", height: 50, width: 50 }}
        />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style
      >
        {NavList.map(({ title, link }) => {
          return (
            <Link to={link} style={{ textDecoration: "none", color: "black" }}>
              <MenuItem onClick={handleClose}>{title}</MenuItem>
            </Link>
          );
        })}
      </Menu>
    </div>
  );
};

export default MobileMenu;

import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
// import OptionsIcon from "@icons/options.svg"
// import BinIcon from "@icons/bin.svg"
// import ArchiveIcon from "@icons/archive.svg"
// import InfoIcon from "@icons/info.svg"
import BinIcon from "@mui/icons-material/DeleteRounded"
import ArchiveIcon from "@mui/icons-material/Inventory2Rounded"
import InfoIcon from "@mui/icons-material/InfoRounded"
import IconButton from "@components/IconButtons"
import MenuItem from "@components/MenuItem"
import { Link } from "react-router-dom"
import PaperProps from "./PaperProps"
import MoreIcon from "@mui/icons-material/MoreVertRounded"

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <React.Fragment>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        color: "black"
      }}>
        <IconButton
          sx={{ color: "black" }}
          onClick={handleClick}
          aria-controls={open ? 'option-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <MoreIcon />
        </IconButton>
      </Box>
      <Menu
        sx={{ color: "black" }}
        anchorEl={anchorEl}
        id="option-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={PaperProps}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <MenuItem>
          <ListItemIcon sx={{ mr: 1, color: "black" }}>
            <BinIcon />
          </ListItemIcon> Delete Conversation
        </MenuItem>

        <MenuItem>
          <ListItemIcon sx={{ mr: 1, color: "black" }}>
            <InfoIcon />
          </ListItemIcon> Details
        </MenuItem>

      </Menu>
    </React.Fragment>
  );
}



// import React from 'react'
// import Box from "@mui/material/Box"
// import { styled } from '@mui/material/styles';
// import IconButton from "@components/IconButtons"
// import OptionsIcon from "@icons/options.svg"
//
//
// function Options() {
// 	const handleOptions = () => {
// 		alert("Open option...")
// 	}
// 	return (
// 		<IconButton onClick={handleOptions}>
// 			<img src={OptionsIcon} />
// 		</IconButton>
// 	)
// }
//
// export default Options
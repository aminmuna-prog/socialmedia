import styled from '@emotion/styled';
import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Toolbar, Typography, Box, InputBase, Avatar } from '@mui/material';
import React, { useState } from 'react';
import Badge from '@mui/material/Badge';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

const Search = styled("div")(({theme}) =>({
      background: "white",
      padding: "0 10px",
      borderRadius: "5px",
      width: "40%",
}))

const Icons = styled(Box)(({theme}) =>({
   display: "flex",
   gap: "20px",
   alignItems: "center",


  
}))



const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AppBar position='sticky'>
        <StyledToolbar>
          <Typography variant='h6' sx={{display:{xs:"none", sm:"block"}}}>MUNA DEV</Typography>
          <Pets sx={{display:{xs:"block", sm:"none"}}}></Pets>
          <Search><InputBase placeholder='search...'/></Search>
          <Icons>
            <Badge badgeContent={4} color="error">
                <Mail  />
            </Badge>
            <Badge badgeContent={2} color="error">
                <Notifications  />
            </Badge>
            
            <Avatar sx={{width: 30, height: 30}} alt="alex marfi"
             src="/static/images/avatar/1.jpg"
             onClick = {e => setOpen(true)}
             />
           
          </Icons>
          
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
     
        open={open}
        onClose={e => setOpen(false)}
       
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
      </AppBar>
    </>
  )
}

export default Navbar

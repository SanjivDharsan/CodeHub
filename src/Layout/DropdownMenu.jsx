import React from 'react';
import './DropdownMenu.css';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const DropdownMenu = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const DrawerList = (
    <Box sx={{ width: 300}}   onClick={toggleDrawer(false)}>
      <List>
          <ListItem  disablePadding>
            <ListItemButton><ListItemText primary='HTML' onClick={()=>{window.location.href='/html'}} /></ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem  disablePadding>
             <ListItemButton><ListItemText primary='CSS' onClick={()=>{window.location.href='/css'}} /></ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem  disablePadding>
          <ListItemButton><ListItemText primary='JavaScript' onClick={()=>{window.location.href='/javascript'}} /></ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem  disablePadding>
          <ListItemButton><ListItemText primary='C++' onClick={()=>{window.location.href='/cpp'}} /></ListItemButton>
          </ListItem>
      </List>
      <List>
          <ListItem  disablePadding>
          <ListItemButton><ListItemText primary='Java' onClick={()=>{window.location.href='/java'}} /></ListItemButton>
          </ListItem>
      </List>

      </Box>
  );

  return (
    <div>
      <span className="dropdown-toggle" onClick={toggleDrawer(true)} style={{fontSize:"x-large"}}>Courses</span>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default DropdownMenu;

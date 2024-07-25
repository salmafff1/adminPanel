import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { Toolbar, IconButton, styled, InputBase, Stack, Box, useTheme, Avatar } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import { alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { Palette } from '@mui/icons-material';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
    
  }),

  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
}));


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(5),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const TopBar = ({ open, handleDrawerOpen, setMode }) => {
    const theme= useTheme();
    const [modeState, setModeState] = useState('light'); // Renamed state variable
  
    const toggleMode = () => {
      setModeState(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      setMode(modeState); // Call setMode prop with updated modeState
    };

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 2,
            display: open ? 'none' : 'inherit',
          }}
        >
          <MenuIcon />
        </IconButton>
        <Avatar
          src="https://www.ozeol.com/wp-content/uploads/2022/02/Ozeol-logo-for-FB-post.png" 
          alt="Logo"
          sx={{
            mx:"auto",mt:0.5,
            width: 65,
            height: 65,
            marginRight: theme.spacing(10),
          }}
        />


        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>

        <Box flexGrow={1} />

        <Stack direction="row">
  {theme.palette.mode === "light" ? (
    <IconButton onClick={() => {
      setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    }} color="inherit">
      <LightModeOutlinedIcon />
    </IconButton>
  ) : (
  
    <IconButton onClick={() => {
      setMode(prevMode => (prevMode === 'dark' ? 'light' : 'dark'));
    }} color="inherit">
      <DarkModeOutlinedIcon />
    </IconButton>
  )}




          <IconButton color="inherit">
            <Person2OutlinedIcon />
          </IconButton>

        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Box,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Logo from "../images/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontSize: 25,
  },

  logo: {
    padding: 7,
    height: 80,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <img src={Logo} alt="logo" className={classes.logo}></img>
          </Link>
          <Typography variant="h6" className={classes.title}>
            MTD BANK
          </Typography>

          <Box flexGrow={4}>
            <Button color="inherit">About US</Button>
            <Button color="inherit">Product</Button>
            <Button color="inherit">Package</Button>
            <Button color="inherit">Contact US</Button>
          </Box>
          <Box marginRight="15px">
            <Button color="inherit">Sign in</Button>
            <Button
              style={{
                borderRadius: 5,
                backgroundColor: "white",
                padding: "5px 15px",
                fontSize: "12px",
                color: "blue",
                fontWeight: 600,
                marginLeft: 5,
              }}
              variant="contained"
            >
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

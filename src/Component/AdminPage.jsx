import React, { Fragment, useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import PeopleIcon from "@material-ui/icons/People";
import IconDashboard from "@material-ui/icons/Dashboard";
import MailIcon from "@material-ui/icons/Mail";

import Users from "./UsersPage";
import Dashboard from "./DashboardPage";


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },

  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "transparent",
    color: "white"
  },

  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.default,
    marginLeft: drawerWidth
  }
}));

const Admin = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Fragment>
        <Drawer
          className={classes.drawer}
          variant="permanent"
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <div className={classes.toolbar} />

          <List component="nav">
            <ListItem button component={Link} to="/Admin/Dashboard">
              <ListItemIcon>
                <IconDashboard />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
            <Divider></Divider>
            <ListItem button component={Link} to="/Admin/Users">
              <ListItemIcon>
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItem>
            <ListItem button component={Link} to="/Admin/Messages">
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItem>
          </List>
          <Divider />
        </Drawer>

        <Switch>
          <Route path="/Admin/Dashboard" component={Dashboard} />
          <Route path="/Admin/Users" component={Users} />
        </Switch>
      </Fragment>
    </div>
  );
};

export default Admin;

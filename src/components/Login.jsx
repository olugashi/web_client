import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";

const Login = () => {
  return (
    <Dialog open={true} maxWidth="xs">
      <DialogTitle> Sign In</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={12} className="form-group">
            <TextField
              variant="outlined"
              required
              fullWidth
              id="Username"
              label="User name"
              name="Username"
              autoComplete="Username"
            />
          </Grid>

          <Grid item xs={12} className="form-group">
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </Grid>

          <Grid item xs={12} className="form-group">
            <Button
              type="submit"
              fullWidth
              color="primary"
              variant="contained"
              component={Link}
              to="/Admin"
            >
              Submit
            </Button>
          </Grid>

          <Grid item xs={12} className="form-group">
            <p className="forgot-password text-right">
              Forgot <a href="/Register">password?</a>
            </p>
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default Login;

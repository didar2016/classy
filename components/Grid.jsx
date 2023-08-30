import React from "react";
// @material-ui/core components
import { withStyles } from "@mui/styles";

import Grid from "@mui/material/Grid";
import PropTypes from "prop-types";

const style1 = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
  },
};

function GridIt({ ...props }) {
  const { classes, children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

const style2 = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto",
  },
};

function GridCont({ ...props }) {
  const { classes, children, className, ...rest } = props;

  return (
    <Grid container {...rest} className={classes.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridCont.defaultProps = {
  className: "",
};

GridCont.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

const GridItem = withStyles(style1)(GridIt);
const GridContainer = withStyles(style2)(GridCont);

export { GridItem, GridContainer };

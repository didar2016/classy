import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { withStyles } from "@mui/styles";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

// @material-ui/icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//import accordionStyle from "../assets/accordionStyle";
import {
  primaryColor,
  secondaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
} from "../components/assets/material-kit-pro-react.jsx";

const accordionStyle = (theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "20px",
  },
  expansionPanel: {
    boxShadow: "none",
    "&:before": {
      display: "none !important",
    },
  },
  expansionPanelExpanded: {
    margin: "0",
  },
  expansionPanelSummary: {
    minHeight: "auto !important",
    backgroundColor: "transparent",
    borderBottom: "1px solid #ddd",
    padding: "25px 10px 5px 0px",
    borderTopLeftRadius: "3px",
    borderTopRightRadius: "3px",
    color: "#3C4858",
  },
  primaryExpansionPanelSummary: {
    "&:hover": {
      color: primaryColor,
    },
  },
  secondaryExpansionPanelSummary: {
    "&:hover": {
      color: secondaryColor,
    },
  },
  warningExpansionPanelSummary: {
    "&:hover": {
      color: warningColor,
    },
  },
  dangerExpansionPanelSummary: {
    "&:hover": {
      color: dangerColor,
    },
  },
  successExpansionPanelSummary: {
    "&:hover": {
      color: successColor,
    },
  },
  infoExpansionPanelSummary: {
    "&:hover": {
      color: infoColor,
    },
  },
  roseExpansionPanelSummary: {
    "&:hover": {
      color: roseColor,
    },
  },
  // expansionPanelSummaryExpaned: {
  //   "& $expansionPanelSummaryExpandIcon": {
  //     [theme.breakpoints.up("md")]: {
  //       top: "auto !important",
  //     },
  //     transform: "rotate(180deg)",
  //     [theme.breakpoints.down("sm")]: {
  //       top: "10px !important",
  //     },
  //     // some jss/css to make the cards look a bit better on Internet Explorer
  //     "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
  //       display: "inline-block !important",
  //       top: "10px !important",
  //     },
  //   },
  // },
  primaryExpansionPanelSummaryExpaned: {
    color: primaryColor,
  },
  secondaryExpansionPanelSummaryExpaned: {
    color: secondaryColor,
  },
  warningExpansionPanelSummaryExpaned: {
    color: warningColor,
  },
  dangerExpansionPanelSummaryExpaned: {
    color: dangerColor,
  },
  successExpansionPanelSummaryExpaned: {
    color: successColor,
  },
  infoExpansionPanelSummaryExpaned: {
    color: infoColor,
  },
  roseExpansionPanelSummaryExpaned: {
    color: roseColor,
  },
  expansionPanelSummaryContent: {
    margin: "0 !important",
  },
  // expansionPanelSummaryExpandIcon: {
  //   [theme.breakpoints.up("md")]: {
  //     top: "auto !important",
  //   },
  //   transform: "rotate(0deg)",
  //   color: "inherit",
  //   right: "-2px",
  //   [theme.breakpoints.down("sm")]: {
  //     top: "10px !important",
  //   },
  //   // some jss/css to make the cards look a bit better on Internet Explorer
  //   "@media all and (-ms-high-contrast: none), (-ms-high-contrast: active)": {
  //     display: "inline-block !important",
  //   },
  // },
  expansionPanelSummaryExpandIconExpanded: {},
  title: {
    fontSize: "15px",
    fontWeight: "bolder",
    marginTop: "0",
    marginBottom: "0",
    color: "inherit",
  },
  expansionPanelDetails: {
    display: "block",
    padding: "15px 0px 5px",
    fontSize: ".875rem",
  },
});

class Accordions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: props.active,
      single: false,
    };
  }

  componentWillMount() {
    if (this.state.active.length === undefined) {
      this.setState({
        active: [this.state.active],
        single: true,
      });
    }
  }

  handleChange = (panel) => (event, expanded) => {
    let newArray;

    if (this.state.single) {
      if (this.state.active[0] === panel) {
        newArray = [];
      } else {
        newArray = [panel];
      }
    } else {
      if (this.state.active.indexOf(panel) === -1) {
        newArray = [...this.state.active, panel];
      } else {
        newArray = [...this.state.active];
        newArray.splice(this.state.active.indexOf(panel), 1);
      }
    }
    this.setState({
      active: newArray,
    });
  };
  render() {
    const { classes, collapses, activeColor } = this.props;
    return (
      <div className={classes.root}>
        {collapses.map((prop, key) => {
          return (
            <Accordion
              expanded={
                this.state.active === key ||
                this.state.active.indexOf(key) !== -1
              }
              onChange={this.handleChange(key)}
              key={key}
              classes={{
                root: classes.expansionPanel,
                expanded: classes.expansionPanelExpanded,
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                classes={{
                  root: `${classes.expansionPanelSummary} ${
                    classes[activeColor + "ExpansionPanelSummary"]
                  }`,
                  expanded: `${classes.expansionPanelSummaryExpaned} ${
                    classes[activeColor + "ExpansionPanelSummaryExpaned"]
                  }`,
                  content: classes.expansionPanelSummaryContent,
                  expandIcon: classes.expansionPanelSummaryExpandIcon,
                }}
              >
                <h4 className={classes.title}>{prop.title}</h4>
              </AccordionSummary>
              <AccordionDetails className={classes.expansionPanelDetails}>
                {prop.content}
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    );
  }
}

Accordions.defaultProps = {
  active: -1,
  activeColor: "primary",
};

Accordions.propTypes = {
  classes: PropTypes.object.isRequired,
  // index of the default active collapse
  active: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]),
  collapses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ).isRequired,
  activeColor: PropTypes.oneOf([
    "primary",
    "secondary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
  ]),
};

export default withStyles(accordionStyle)(Accordions);

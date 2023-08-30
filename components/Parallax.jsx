import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { withStyles } from "@mui/styles";

// core components
/*import parallaxStyle from "../assets/parallaxStyle.jsx";*/

function parallaxStyle() {
  const parallaxStyle = {
    parallax: {
      height: "100vh",
      maxHeight: "1600px",
      overflow: "hidden",
      position: "relative",
      backgroundPosition: "50%",
      backgroundSize: "cover",
      margin: "0",
      padding: "0",
      border: "0",
      display: "flex",
      alignItems: "center",
    },
    filter: {},
    primaryColor: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(225,190,231,.56),rgba(186,104,200,.95))",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    roseColor: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(248,187,208,.56),rgba(240,98,146,.95))",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    darkColor: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    infoColor: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(178,235,242,.56),rgba(77,208,225,.95))",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    successColor: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(165,214,167,.56),rgba(102,187,106,.95))",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    warningColor: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:after": {
        background:
          "linear-gradient(60deg,rgba(255,224,178,.56),rgba(255,183,77,.95))",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    dangerColor: {
      "&:before": {
        background: "rgba(0, 0, 0, 0.5)",
      },
      "&:after": {
        background:
          "linear-gradient(60deg,hsla(0,73%,77%,.56),rgba(239,83,80,.95))",
      },
      "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''",
      },
    },
    small: {
      height: "65vh",
      minHeight: "65vh",
      maxHeight: "650px",
    },
  };

  return parallaxStyle;
}

class Parallax extends React.Component {
  constructor(props) {
    super(props);
    let windowScrollTop;
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 768) {
        windowScrollTop = window.pageYOffset / 3;
      } else {
        windowScrollTop = 0;
      }
    }

    this.state = {
      transform: "translate3d(0," + windowScrollTop + "px,0)",
    };
    this.resetTransform = this.resetTransform.bind(this);
  }
  componentDidMount() {
    if (window.innerWidth >= 768) {
      var windowScrollTop = window.pageYOffset / 3;
      this.setState({
        transform: "translate3d(0," + windowScrollTop + "px,0)",
      });
      window.addEventListener("scroll", this.resetTransform);
    }
  }
  componentWillUnmount() {
    if (window.innerWidth >= 768) {
      window.removeEventListener("scroll", this.resetTransform);
    }
  }
  resetTransform() {
    var windowScrollTop = window.pageYOffset / 3;
    this.setState({
      transform: "translate3d(0," + windowScrollTop + "px,0)",
    });
  }
  render() {
    const { classes, filter, className, children, style, image, small } =
      this.props;
    const parallaxClasses = classNames({
      [classes.parallax]: true,
      [classes[filter + "Color"]]: filter !== undefined,
      [classes.small]: small,
      [className]: className !== undefined,
    });
    return (
      <div
        className={parallaxClasses}
        style={{
          ...style,
          backgroundImage: "url(" + image + ")",
          ...this.state,
        }}
        ref="parallax"
      >
        {children}
      </div>
    );
  }
}

Parallax.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  filter: PropTypes.oneOf([
    "primary",
    "rose",
    "dark",
    "info",
    "success",
    "warning",
    "danger",
  ]),
  children: PropTypes.node,
  style: PropTypes.string,
  image: PropTypes.string,
  small: PropTypes.bool,
};

export default withStyles(parallaxStyle)(Parallax);

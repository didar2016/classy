import React from "react";
// nodejs library that concatenates classes
// eslint-disable-next-line no-unused-vars
import classNames from "classnames";
// react component used to create nice image meadia player
import ImageGallery from "react-image-gallery";
// @material-ui/core components
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { withStyles } from "@mui/styles";

// @material-ui/icons
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Favorite from "@mui/icons-material/Favorite";
import ExpandMore from "@mui/icons-material/ExpandMore";

//import GridContainer from "./components/GridContainer.jsx";
//import GridItem from "./components/GridItem.jsx";
import { GridItem, GridContainer } from "../components/Grid.jsx";
import Accordions from "../components/Accordion.jsx";
//import Card from "./components/Card.jsx";
//import CardHeader from "./components/CardHeader.jsx";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "../components/CardComponent.jsx";
//import CardBody from "./components/CardBody.jsx";
//import CardFooter from "./components/CardFooter.jsx";
import Button from "../components/Button";
import Parallax from "../components/Parallax.jsx";
import Tooltip from "@mui/material/Tooltip";

//import productStyle from "./assets/productStyle"
import {
  container,
  mlAuto,
  section,
  main,
  mainRaised,
  title,
  cardTitle,
  roseColor,
  primaryColor,
  primaryBoxShadow,
} from "../components/assets/material-kit-pro-react.jsx";

//import tooltipsStyle from "./tooltipsStyle.jsx";
const tooltipsStyle = {
  tooltip: {
    padding: "10px 15px",
    minWidth: "130px",
    color: "#FFFFFF",
    lineHeight: "1.7em",
    background: "rgba(85,85,85,0.9)",
    border: "none",
    borderRadius: "3px",
    boxShadow:
      "0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)",
    maxWidth: "200px",
    textAlign: "center",
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: "0.875em",
    fontStyle: "normal",
    fontWeight: "400",
    textShadow: "none",
    textTransform: "none",
    letterSpacing: "normal",
    wordBreak: "normal",
    wordSpacing: "normal",
    wordWrap: "normal",
    whiteSpace: "normal",
    lineBreak: "auto",
  },
};

//import imagesStyles from "./imagesStyles.jsx";
const imagesStyles = {
  imgFluid: {
    maxWidth: "100%",
    height: "auto",
  },
  imgRounded: {
    borderRadius: "6px !important",
  },
  imgRoundedCircle: {
    borderRadius: "50% !important",
  },
  imgRaised: {
    boxShadow:
      "0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  imgGallery: {
    width: "100%",
    marginBottom: "2.142rem",
  },
  imgCardTop: {
    width: "100%",
    borderTopLeftRadius: "calc(.25rem - 1px)",
    borderTopRightRadius: "calc(.25rem - 1px)",
  },
  imgCardBottom: {
    width: "100%",
    borderBottomLeftRadius: "calc(.25rem - 1px)",
    borderBottomRightRadius: "calc(.25rem - 1px)",
  },
  imgCard: {
    width: "100%",
    borderRadius: "calc(.25rem - 1px)",
  },
  imgCardOverlay: {
    position: "absolute",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    padding: "1.25rem",
  },
};

//import customSelectStyle from "./customSelectStyle.jsx";
const customSelectStyle = {
  select: {
    padding: "12px 0 7px",
    fontSize: ".75rem",
    fontWeight: "400",
    lineHeight: "1.42857",
    textDecoration: "none",
    textTransform: "uppercase",
    color: "#3C4858",
    letterSpacing: "0",
    "&:focus": {
      backgroundColor: "transparent",
    },
    "&[aria-owns] + input + svg": {
      transform: "rotate(180deg)",
    },
    "& + input + svg": {
      transition: "all 300ms linear",
    },
  },
  selectFormControl: {
    margin: "10px 1px 10px 0px !important",
    "& > div": {
      "&:before": {
        borderBottomWidth: "1px !important",
        borderBottomColor: "#D2D2D2 !important",
      },
      "&:after": {
        borderBottomColor: "red" + "!important",
      },
    },
  },
  selectLabel: {
    fontSize: "12px",
    textTransform: "uppercase",
    color: "#3C4858 !important",
    top: "8px",
  },
  selectMenu: {
    "& > div > ul": {
      border: "0",
      padding: "5px 0",
      margin: "0",
      boxShadow: "none",
      minWidth: "100%",
      borderRadius: "4px",
      boxSizing: "border-box",
      display: "block",
      fontSize: "14px",
      textAlign: "left",
      listStyle: "none",
      backgroundColor: "#fff",
      backgroundClip: "padding-box",
    },
    "& $selectPaper $selectMenuItemSelectedMultiple": {
      backgroundColor: "inherit",
    },
  },
  selectMenuItem: {
    fontSize: "13px",
    padding: "10px 20px",
    margin: "0 5px",
    borderRadius: "2px",
    transition: "all 150ms linear",
    display: "block",
    clear: "both",
    fontWeight: "400",
    lineHeight: "2",
    whiteSpace: "nowrap",
    color: "#333",
    paddingRight: "30px",
    "&:hover": {
      backgroundColor: "#333",
      color: "#FFFFFF",
      ...primaryBoxShadow,
    },
  },
  selectMenuItemSelected: {
    backgroundColor: "#333" + "!important",
    color: "#FFFFFF",
  },
  selectMenuItemSelectedMultiple: {
    "&:hover": {
      backgroundColor: "#333" + "!important",
      color: "#FFFFFF",
      ...primaryBoxShadow,
      "&:after": {
        color: "#FFFFFF",
      },
    },
    "&:after": {
      top: "16px",
      right: "12px",
      width: "12px",
      height: "5px",
      borderLeft: "2px solid currentColor",
      transform: "rotate(-45deg)",
      opacity: "1",
      color: "#3c4858",
      position: "absolute",
      content: "''",
      borderBottom: "2px solid currentColor",
      transition: "opacity 90ms cubic-bezier(0,0,.2,.1)",
    },
  },
  selectPaper: {
    boxSizing: "borderBox",
    borderRadius: "4px",
    padding: "0",
    minWidth: "100%",
    display: "block",
    border: "0",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.26)",
    backgroundClip: "padding-box",
    margin: "2px 0 0",
    fontSize: "14px",
    textAlign: "left",
    listStyle: "none",
    backgroundColor: "transparent",
    maxHeight: "266px",
  },
};

const productStyle = {
  mlAuto,
  main,
  ...imagesStyles,
  ...customSelectStyle,
  ...tooltipsStyle,
  container: {
    ...container,
    zIndex: 2,
  },
  mainRaised: {
    ...mainRaised,
  },
  section: {
    ...section,
    padding: "70px 0px",
  },
  title: {
    ...title,
    marginBottom: 0,
  },
  sectionGray: {
    background: "#e5e5e5",
  },
  mainPrice: {
    margin: "10px 0px 25px",
  },
  textCenter: {
    textAlign: "center!important",
  },
  features: {
    paddingTop: "30px",
  },
  productPage: {
    backgroundColor: "#eee",
    "& $mainRaised": {
      margin: "-40vh 0 0",
      padding: "40px",
    },
    "& .image-gallery-slide img": {
      borderRadius: "3px",
      maxWidth: "300px",
      height: "auto",
    },
    "& .image-gallery-swipe": {
      margin: "30px 0px",
      overflow: "hidden",
      width: "100%",
      height: "auto",
      textAlign: "center",
    },
    "& .image-gallery-thumbnails > .image-gallery-thumbnails-container a": {
      "&.active > div": {
        opacity: "1",
        borderColor: "#DDDDDD",
      },
      "& > div": {
        width: "80%",
        maxWidth: "85px",
        margin: "0 auto",
        padding: "8px",
        display: "block",
        border: "1px solid transparent",
        background: "transparent",
        borderRadius: "3px",
        opacity: ".8",
      },
      "& > div img": {
        borderRadius: "3px",
        width: "100%",
        height: "auto",
        textAlign: "center",
      },
    },
  },
  titleRow: {
    marginTop: "-8vh",
  },
  floatRight: {
    float: "right!important",
  },
  pageHeader: {
    minHeight: "60vh",
    maxHeight: "600px",
    height: "auto",
    backgroundPosition: "top center",
  },
  relatedProducts: {
    marginTop: "50px",
    "& $title": {
      marginBottom: "80px",
    },
  },
  pickSize: {
    marginTop: "50px",
  },
  pullRight: {
    float: "right",
  },
  cardCategory: {
    textAlign: "center",
    marginTop: "10px",
  },
  cardTitle: {
    ...cardTitle,
    textAlign: "center",
  },
  cardDescription: {
    textAlign: "center",
    color: "#999",
  },
  textRose: {
    color: "red",
  },
  justifyContentBetween: {
    justifyContent: "space-between!important",
  },
  socialFeed: {
    "& p": {
      display: "table-cell",
      verticalAlign: "top",
      overflow: "hidden",
      paddingBottom: "10px",
      maxWidth: 300,
    },
    "& i": {
      fontSize: "20px",
      display: "table-cell",
      paddingRight: "10px",
    },
  },
  img: {
    width: "20%",
    marginRight: "5%",
    marginBottom: "5%",
    float: "left",
  },
  block: {
    color: "inherit",
    padding: "0.9375rem",
    fontWeight: "500",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    textDecoration: "none",
    position: "relative",
    display: "block",
  },
  inlineBlock: {
    display: "inline-block",
    padding: "0px",
    width: "auto",
  },
  list: {
    marginBottom: "0",
    padding: "0",
    marginTop: "0",
  },
  left: {
    float: "left!important",
    display: "block",
  },
  right: {
    padding: "15px 0",
    margin: "0",
    float: "right",
  },
  icon: {
    top: "3px",
    width: "18px",
    height: "18px",
    position: "relative",
  },
};

class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSelect: "0",
      sizeSelect: "0",
    };
  }
  handleSelect = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  componentDidMount() {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  }
  render() {
    const { classes } = this.props;
    const images = [
      {
        original:
          "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        thumbnail:
          "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      },
      {
        original:
          "https://images.unsplash.com/photo-1542840411-4275cdfe7782?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        thumbnail:
          "https://images.unsplash.com/photo-1542840411-4275cdfe7782?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      },
      {
        original:
          "https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        thumbnail:
          "https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      },
      {
        original:
          "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        thumbnail:
          "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      },
      {
        original:
          "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        thumbnail:
          "https://images.unsplash.com/photo-1521341057461-6eb5f40b07ab?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      },
      {
        original:
          "https://images.unsplash.com/photo-1542840411-4275cdfe7782?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        thumbnail:
          "https://images.unsplash.com/photo-1542840411-4275cdfe7782?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      },
      {
        original:
          "https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        thumbnail:
          "https://images.unsplash.com/photo-1472417583565-62e7bdeda490?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      },
      {
        original:
          "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
        thumbnail:
          "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ",
      },
    ];
    return (
      <div className={classes.productPage}>
        <Parallax
          image="https://images.unsplash.com/photo-1523211737006-e54a3c7299ab?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
          filter="dark"
          className={classes.pageHeader}
        >
          <div className={classes.container}>
            <GridContainer className={classes.titleRow}>
              <GridItem md={4} className={classes.mlAuto}>
                <Button color="white" className={classes.floatRight}>
                  <ShoppingCart /> 0 items
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.section, classes.sectionGray)}>
          <div className={classes.container}>
            <div className={classNames(classes.main, classes.mainRaised)}>
              <GridContainer>
                <GridItem md={6} sm={6}>
                  <ImageGallery
                    showFullscreenButton={false}
                    showPlayButton={false}
                    startIndex={3}
                    items={images}
                  />
                </GridItem>
                <GridItem md={6} sm={6}>
                  <h2 className={classes.title}>Elegant Blazer</h2>
                  <h3 className={classes.mainPrice}>EUR500</h3>
                  <Accordions
                    active={0}
                    activeColor="danger"
                    collapses={[
                      {
                        title: "Product Description",
                        content: (
                          <p style={{ color: "slategray" }}>
                            Enter here the Product Description.
                          </p>
                        ),
                      },
                      {
                        title: "Additional Information",
                        content: (
                          <p style={{ color: "slategray" }}>
                            Enter Here Additional Information.
                          </p>
                        ),
                      },
                      {
                        title: "Details and Care",
                        content: (
                          <ul style={{ color: "slategray" }}>
                            <li>
                              Storm and midnight-blue stretch cotton-blend
                            </li>
                            <li>
                              Notch lapels, functioning buttoned cuffs, two
                              front flap pockets, single vent, internal pocket
                            </li>
                            <li>Two button fastening</li>
                            <li>84% cotton, 14% nylon, 2% elastane</li>
                            <li>Dry clean</li>
                          </ul>
                        ),
                      },
                    ]}
                  />
                  <GridContainer className={classes.pickSize}>
                    <GridItem md={6} sm={6}>
                      <label>Select color</label>
                      <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <Select
                          MenuProps={{
                            className: classes.selectMenu,
                          }}
                          classes={{
                            select: classes.select,
                          }}
                          value={this.state.colorSelect}
                          onChange={this.handleSelect}
                          inputProps={{
                            name: "colorSelect",
                            id: "color-select",
                          }}
                        >
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="0"
                          >
                            Black
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="1"
                          >
                            Gray
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="2"
                          >
                            White
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </GridItem>
                    <GridItem md={6} sm={6}>
                      <label>Select size</label>
                      <FormControl
                        fullWidth
                        className={classes.selectFormControl}
                      >
                        <Select
                          MenuProps={{
                            className: classes.selectMenu,
                          }}
                          classes={{
                            select: classes.select,
                          }}
                          value={this.state.sizeSelect}
                          onChange={this.handleSelect}
                          inputProps={{
                            name: "sizeSelect",
                            id: "size-select",
                          }}
                        >
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="0"
                          >
                            Small
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="1"
                          >
                            Medium
                          </MenuItem>
                          <MenuItem
                            classes={{
                              root: classes.selectMenuItem,
                              selected: classes.selectMenuItemSelected,
                            }}
                            value="2"
                          >
                            Large
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </GridItem>
                  </GridContainer>
                  <GridContainer className={classes.pullRight}>
                    <Button round color="pinterest">
                      Add to Cart &nbsp; <ShoppingCart />
                    </Button>
                  </GridContainer>
                </GridItem>
              </GridContainer>
            </div>

            <div className={classes.relatedProducts}>
              <h3 className={classNames(classes.title, classes.textCenter)}>
                Related Products:
              </h3>
              <GridContainer>
                {images.map((item) => {
                  return (
                    <>
                      <GridItem sm={6} md={3}>
                        <Card product>
                          <CardHeader image>
                            <a href="#change">
                              <img src={item.original} alt="cardProduct" />
                            </a>
                          </CardHeader>
                          <CardBody>
                            <h6
                              className={classNames(
                                classes.cardCategory,
                                classes.textRose
                              )}
                            >
                              Trending
                            </h6>
                            <h4 className={classes.cardTitle}>
                              Dolce & Gabbana
                            </h4>
                            <div className={classes.cardDescription}>
                              Dolce & Gabbana's 'Greta' tote has been crafted in
                              Italy from hard-wearing red textured-leather.
                            </div>
                          </CardBody>
                          <CardFooter className={classes.justifyContentBetween}>
                            <div className={classes.price}>
                              <h4>$1,459</h4>
                            </div>
                            <div className={classes.stats}>
                              <Tooltip
                                id="tooltip-top"
                                title="Save to Wishlist"
                                placement="top"
                                classes={{ tooltip: classes.tooltip }}
                              >
                                <Button justIcon color="rose" simple>
                                  <Favorite />
                                </Button>
                              </Tooltip>
                            </div>
                          </CardFooter>
                        </Card>
                      </GridItem>
                    </>
                  );
                })}
              </GridContainer>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductPage);

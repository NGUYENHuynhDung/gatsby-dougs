import * as React from "react";
import PropTypes from "prop-types";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

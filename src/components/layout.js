import * as React from "react";
import PropTypes from "prop-types";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import "./layout.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header/>
      <main style={{marginTop:"100px"}}>{children}</main>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

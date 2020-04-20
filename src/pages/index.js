import React from "react";
import Helmet from "react-helmet";
import Video from "../components/Video";

import Layout from "../components/layout";
class Homepage extends React.Component {
  render() {
    const siteTitle = "Live Oak Love";

    return (
      <Layout>
        <Helmet title={siteTitle} />
      </Layout>
    );
  }
}

export default Homepage;

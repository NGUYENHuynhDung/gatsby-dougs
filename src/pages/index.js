import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Question from '../components/Homepage/Question/Question';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
    <Question/>
  </Layout>
)

export default IndexPage

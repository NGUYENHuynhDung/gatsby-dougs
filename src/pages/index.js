import * as React from "react"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Question from '../components/Homepage/Question/Question';
import Hero from '../components/Homepage/Hero/Hero';
import Wrapper from '../components/Homepage/Wrapper/Wrapepr';
import CommonPress from '../components/Homepage/CommonPress/CommonPress';
import WebrateClient from '../components/Homepage/WebrateClient/WebrateClient';
import SectionApp from '../components/Homepage/SectionApp/SectionApp';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero/>
    <Wrapper/>
    <CommonPress/>
    <WebrateClient/>
    <SectionApp/>
    <Question/>
  </Layout>
)

export default IndexPage

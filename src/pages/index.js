import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopBar from "../components/TopBar"
import Header from "../components/Header"
import Features from "../components/Features"
import Statistic from "../components/Statistic"
import Feature from "../components/Feature"

const IndexPage = () => (
  <Layout>
    <SEO title="Landing Page" />
    <TopBar />
    <Header />
    <Features />
    <Statistic />
    <Feature />
  </Layout>
)

export default IndexPage

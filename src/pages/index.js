import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import TopBar from "../components/TopBar"
import Header from "../components/Header"
const IndexPage = () => (
  <Layout>
    <SEO title="Landing Page" />
    <TopBar />
    <Header />
  </Layout>
)

export default IndexPage

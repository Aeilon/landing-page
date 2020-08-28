import React from "react"
import styled from "styled-components"
import logo from "../../images/logo.png"
import IconsContainer from "./IconsContainer"

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 18px;
  @media (min-width: 425px) {
    padding: 0 20px;
  }
  @media (min-width: 768px) {
    padding-left: 25px;
  }
  @media (min-width: 1024px) {
    padding-left: 30px;
  }
  @media (min-width: 1440px) {
    padding-right: 25px;
    padding-left: 40px;
  }
`

export default () => (
  <TopBar>
    <img src={logo} alt="logo" />
    <IconsContainer />
  </TopBar>
)

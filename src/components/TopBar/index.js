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
`

export default () => (
  <TopBar>
    <img src={logo} alt="logo" />
    <IconsContainer />
  </TopBar>
)

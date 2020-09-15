import React, { useState } from "react"
import styled from "styled-components"
import logo from "../../images/logo.png"
import IconsContainer from "./IconsContainer"
import Menu from "./Menu"

const TopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 0 18px;
  position: sticky;
  background: white;
  top: 0;
  z-index: 99;

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

export default () => {
  const [isMenuOpen, toggleMenuOpen] = useState(false)

  return (
    <>
      <TopBar>
        <img src={logo} alt="logo" />
        <IconsContainer
          isMenuOpen={isMenuOpen}
          toggleMenuOpen={toggleMenuOpen}
        />
      </TopBar>
      <Menu isMenuOpen={isMenuOpen} toggleMenuOpen={toggleMenuOpen} />
    </>
  )
}

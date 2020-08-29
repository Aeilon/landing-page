import React from "react"
import styled from "styled-components"
import ttIcon from "../../../images/ttIcon.png"
import fbIcon from "../../../images/fbIcon.png"
import logo from "../../../images/logo.png"

const BottomBar = styled.div`
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
const IconsContainer = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (min-width: 425px) {
    width: 20%;
  }
  @media (min-width: 768px) {
    width: 12%;
  }
  @media (min-width: 1024px) {
    width: 9%;
  }
  @media (min-width: 1440px) {
    width: 6%;
  }
`
const Image = styled.img`
  cursor: pointer;
`

const FooterBottom = () => {
  return (
    <BottomBar>
      <img src={logo} alt="logo" />
      <IconsContainer>
        <Image src={ttIcon} alt="ttIcon" />
        <Image src={fbIcon} alt="fbIcon" />
      </IconsContainer>
    </BottomBar>
  )
}
export default FooterBottom

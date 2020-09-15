import React from "react"
import styled from "styled-components"
import bell from "../../../images/bell.png"
import MenuIcon from "./MenuIcon"

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

export default ({ isMenuOpen, toggleMenuOpen }) => {
  const handleOnClick = () => toggleMenuOpen(!isMenuOpen)

  return (
    <IconsContainer>
      <Image src={bell} alt="bell" />
      <MenuIcon handleOnClick={handleOnClick} isMenuOpen={isMenuOpen} />
    </IconsContainer>
  )
}

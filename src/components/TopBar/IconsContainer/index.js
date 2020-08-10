import React from "react"
import styled from "styled-components"
import bell from "../../../images/bell.png"
import menu from "../../../images/menu.png"

const IconsContainer = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`
const Image = styled.img`
  cursor: pointer;
`

export default () => (
  <IconsContainer>
    <Image src={bell} alt="bell" />
    <Image src={menu} alt="menu" />
  </IconsContainer>
)

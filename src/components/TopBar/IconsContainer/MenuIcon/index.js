import React from "react"
import styled, { css } from "styled-components"

const MenuIcon = styled.div`
  height: 20px;
  width: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
const Line = styled.div`
  background: #475f7b;
  width: 95%;
  height: 4px;
  border-radius: 5px;
  transition: all 0.5s;


 
  }

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      transform: rotate(220deg);
    `}
`

export default ({ isMenuOpen, handleOnClick }) => {
  return (
    <MenuIcon onClick={handleOnClick}>
      <Line isMenuOpen={isMenuOpen} />
      <Line isMenuOpen={isMenuOpen} />
      <Line isMenuOpen={isMenuOpen} />
    </MenuIcon>
  )
}

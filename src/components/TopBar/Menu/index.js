import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

const Menu = styled.div`
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 30%,
    rgba(245, 245, 245, 1) 100%
  );
  height: 0;
  width: 100%;
  position: sticky;
  top: 56px;
  display: flex;
  flex-direction: column;
  z-index: 99;

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      height: 100vh;
    `}
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #304156;
  overflow: hidden;
  width: 150px;
  font-family: Archivo, sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-left: 5%;
  letter-spacing: 1.6px;
  line-height: 40px;

  &:hover {
    color: #135df7;
  }

  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 22px;
  }
  @media (min-width: 1440px) {
    font-size: 24px;
  }

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      overflow: visible;
    `}
`
const StyledHR = styled.hr`
  width: 90%;
  border-top: 1px solid #304156;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  visibility: hidden;

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      visibility: visible;
    `}
`
const ButtonBox = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  ${({ isMenuOpen }) =>
    isMenuOpen &&
    css`
      overflow: visible;
    `}
`
const BlueButton = styled.button`
  width: 111px;
  height: 40px;
  background: #0093ff;
  font-family: Archivo-Medium, sans-serif;
  font-size: 13px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid #0093ff;
  transition: background 0.15s;

  &:hover {
    background: #299cf3;
    transition: background 0.15s;
  }

  @media (min-width: 425px) {
    font-size: 14px;
    width: 121px;
    height: 40px;
  }
  @media (min-width: 768px) {
    margin-right: 30px;
    width: 131px;
    height: 42px;
  }
  @media (min-width: 1024px) {
    font-size: 15px;
    width: 151px;
    height: 46px;
  }
  @media (min-width: 1440px) {
    margin-right: 7px;
    font-size: 15px;
    width: 171px;
    height: 48px;
  }
  @media (min-width: 1600px) {
    margin-right: 12px;
  }
`

export default ({ isMenuOpen, toggleMenuOpen }) => {
  const handleLinkOnClick = () => toggleMenuOpen(false)

  return (
    <Menu isMenuOpen={isMenuOpen}>
      <StyledLink to="#features" onClick={() => handleLinkOnClick()}>
        First
      </StyledLink>
      <StyledLink to="#statistics" onClick={() => handleLinkOnClick()}>
        Second
      </StyledLink>
      <StyledLink to="#feature" onClick={() => handleLinkOnClick()}>
        Third
      </StyledLink>
      <StyledLink to="#testimonials" onClick={() => handleLinkOnClick()}>
        Fourth
      </StyledLink>
      <StyledLink to="#joinUs" onClick={() => handleLinkOnClick()}>
        Fifth
      </StyledLink>
      <StyledHR isMenuOpen={isMenuOpen} />
      <ButtonBox>
        <BlueButton>Sign In</BlueButton>
      </ButtonBox>
    </Menu>
  )
}

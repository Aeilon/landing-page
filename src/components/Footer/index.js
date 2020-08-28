import React from "react"
import styled from "styled-components"
import FooterBottom from "./FooterBottom"

const Footer = styled.footer`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  background: #fafbfb;
`
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const GridBox = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`
const Column = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`
const SH1 = styled.h1`
  font-family: Archivo, sans-serif;
  font-weight: 700;
  font-size: 11px;
  color: #304156;
  margin-top: 20px;
`
const SH2 = styled.h2`
  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: 10px;
  color: #304156;
  margin-top: 20px;
`
const Link = styled.a`
  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: 10px;
  color: #117dce;
  margin-top: 20px;
  text-decoration: none;
`

export default () => {
  return (
    <Footer>
      <Wrapper>
        <GridBox>
          <Column>
            <SH1>Company</SH1>
            <SH2>Blog</SH2>
            <SH2>Privacy Policy</SH2>
            <SH2>About</SH2>
            <SH2>Terms & Cond.</SH2>
          </Column>
          <Column>
            <SH1>Product</SH1>
            <SH2>Price</SH2>
            <SH2>Features</SH2>
            <SH2>Review</SH2>
            <SH2>How it Works</SH2>
          </Column>
          <Column>
            <SH1>Support</SH1>
            <SH2>Community</SH2>
            <SH2>Support</SH2>
            <SH2>Service</SH2>
            <SH2>Email</SH2>
          </Column>
          <Column>
            <SH1>Contacts</SH1>
            <SH2>9301 Larkin Valley Apt. 721</SH2>
            <Link href="#">chelsea.mcclure@yahoo.com</Link>
          </Column>
        </GridBox>
      </Wrapper>
    </Footer>
  )
}
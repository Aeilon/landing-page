import React from "react"
import styled from "styled-components"
import laptopImage from "../../images/laptop.png"
import Alert from "./Alert"

const Header = styled.header`
  width: 100%;
  height: 550px;
  display: flex;
  justify-content: center;
  background: #fafbfb;
  padding-bottom: 20px;
  padding-top: 20px;

  @media (min-width: 425px) {
    height: 610px;
  }
  @media (min-width: 768px) {
    height: 650px;
    padding-bottom: 30px;
    padding-top: 30px;
  }
  @media (min-width: 1440px) {
    height: 809px;
    padding-bottom: 0;
    padding-top: 0;
  }
`
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 60%;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
    width: 75%;
    margin-left: 10%;
  }
`
const HeaderBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex: 2;
  }
  @media (min-width: 1440px) {
    height: 50%;
    flex: 1;
  }
`
const ImageBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    flex: 3;
  }
  @media (min-width: 1440px) {
    flex: 3;
  }
`
const Image = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 425px) {
    width: 90%;
  }
  @media (min-width: 768px) {
    width: 55%;
  }
  @media (min-width: 1440px) {
    width: 95%;
  }
`
const SH1 = styled.h1`
  font-family: Archivo, sans-serif;
  font-weight: 700;
  font-size: 24px;
  flex: 3;
  color: #304156;

  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 1024px) {
    font-size: 33px;
  }
  @media (min-width: 1440px) {
    font-size: 38px;
  }
`
const SH5 = styled.h5`
  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: 13px;
  flex: 3;
  color: #304156;
  line-height: 1.4;

  @media (min-width: 425px) {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    font-size: 15px;
  }
  @media (min-width: 1024px) {
    font-size: 16px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
  }
`
const ButtonsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 2;

  @media (min-width: 768px) {
    justify-content: center;
  }
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
`
const WhiteButton = styled.button`
  width: 119px;
  height: 40px;
  background: #ffffff;
  color: #304156;
  font-family: Archivo-Medium, sans-serif;
  font-size: 13px;
  border-radius: 3px;
  cursor: pointer;
  border: 1px solid lightgray;

  @media (min-width: 425px) {
    font-size: 14px;
    width: 129px;
    height: 40px;
  }
  @media (min-width: 768px) {
    margin-left: 30px;
    width: 138px;
    height: 42px;
  }
  @media (min-width: 1024px) {
    font-size: 16px;
    width: 158px;
    height: 46px;
  }
  @media (min-width: 1440px) {
    margin-left: 7px;
    width: 178px;
    height: 48px;
    font-size: 18px;
  }
`

export default () => {
  return (
    <Header>
      <Wrapper>
        <HeaderBox>
          <Alert />
          <SH1>Help Finding Information Online</SH1>
          <SH5>
            So you have your new digital camera and clicking away to glory
            anything and everything in sight. Now you want to print them and you
            need the best photo{" "}
          </SH5>
          <ButtonsBox>
            <BlueButton>Start for Free</BlueButton>
            <WhiteButton>Button Name</WhiteButton>
          </ButtonsBox>
        </HeaderBox>
        <ImageBox>
          <Image src={laptopImage} alt="laptop" />
        </ImageBox>
      </Wrapper>
    </Header>
  )
}

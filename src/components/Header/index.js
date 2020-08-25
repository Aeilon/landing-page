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
`
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HeaderBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
`
const ImageBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Image = styled.img`
  width: 100%;
  height: auto;
`
const SH1 = styled.h1`
  font-family: Archivo, sans-serif;
  font-weight: 700;
  font-size: 24px;
  flex: 3;
  color: #304156;
`
const SH5 = styled.h5`
  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: 13px;
  flex: 3;
  color: #304156;
  line-height: 1.4;
`
const ButtonsBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex: 2;
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

import React from "react"
import styled from "styled-components"

const JoinUsSection = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
`
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SH1 = styled.h1`
  font-family: Archivo, sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: #304156;
`
const TextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const ButtonBox = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: space-between;
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
    <JoinUsSection>
      <Wrapper>
        <TextBox>
          <SH1>Be part of the future. </SH1>
          <SH1>Join Us.</SH1>
        </TextBox>
        <ButtonBox>
          <BlueButton>Button Name</BlueButton>
          <WhiteButton>Button Name</WhiteButton>
        </ButtonBox>
      </Wrapper>
    </JoinUsSection>
  )
}

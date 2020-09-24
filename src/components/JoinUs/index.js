import React from "react"
import styled from "styled-components"

const JoinUsSection = styled.section`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 20px;

  @media (min-width: 768px) {
    height: 240px;
  }
  @media (min-width: 1024px) {
    height: 280px;
  }
  @media (min-width: 1440px) {
    height: 324px;
  }
  @media (min-width: 1600px) {
    height: 350px;
  }
  @media (min-width: 1900px) {
    height: 380px;
  }
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

  @media (min-width: 768px) {
    font-size: 27px;
  }
  @media (min-width: 1024px) {
    font-size: 29px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
    text-align: start;
  }
`
const TextBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    flex: 3;
    padding-top: 30px;
  }
  @media (min-width: 1024px) {
    flex: 4;
  }
  @media (min-width: 1600px) {
    padding-top: 50px;
  }
  @media (min-width: 1900px) {
    padding-top: 60px;
  }
`
const ButtonBox = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media (min-width: 320px) {
    width: 98%;
  }
  @media (min-width: 375px) {
    width: 87%;
  }
  @media (min-width: 425px) {
    width: 80%;
  }
  @media (min-width: 768px) {
    width: 45%;
    flex: 2;
  }
  @media (min-width: 1024px) {
    width: 35%;
    flex: 3;
  }
  @media (min-width: 1440px) {
    width: 30%;
  }
  @media (min-width: 1600px) {
    width: 28%;
    flex: 4;
  }
  @media (min-width: 1900px) {
    width: 25%;
    flex: 5;
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
    width: 146px;
    height: 48px;
  }
  @media (min-width: 1600px) {
    margin-right: 12px;
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
  transition: background 0.15s;

  &:hover {
    background: whitesmoke;
    transition: background 0.15s;
  }

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
    width: 163px;
    height: 48px;
    font-size: 18px;
  }
  @media (min-width: 1600px) {
    margin-right: 12px;
  }
`

export default () => {
  return (
    <JoinUsSection id="joinUs">
      <Wrapper
        data-sal="zoom-in"
        data-sal-easing="ease-in-out"
        data-sal-duration="700"
      >
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

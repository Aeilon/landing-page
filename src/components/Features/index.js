import React from "react"
import styled from "styled-components"
import Feature from "./Feature"

const FeaturesSection = styled.section`
  width: 100%;
  height: 600px;
  display: flex;
  justify-content: center;
  padding-bottom: 20px;
  padding-top: 20px;

  @media (min-width: 768px) {
    height: 480px;
  }
  @media (min-width: 1440px) {
    height: 722px;
    padding-top: 55px;
    padding-bottom: 55px;
  }
`
const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 1440px) {
    width: 75%;
  }
`

const TextBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 75%;
    flex: 0;
    height: 230px;
  }
  @media (min-width: 1440px) {
    width: 70%;
    flex: 0;
    height: 170px;
  }
`
const SH1 = styled.h1`
  font-family: Archivo, sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: #304156;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;

  @media (min-width: 768px) {
    font-size: 27px;
  }
  @media (min-width: 1024px) {
    font-size: 29px;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
    flex: 2;
  }
`
const SH2 = styled.h2`
  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #304156;
  text-align: center;
  flex: 1;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 16px;
  }
  @media (min-width: 1024px) {
    font-size: 17px;
  }
  @media (min-width: 1440px) {
    font-size: 18px;
    line-height: 1.8;
  }
  @media (min-width: 1600px) {
  }
`
const FeaturesBox = styled.div`
  width: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    flex: 0;
    height: 300px;
  }
`

export default () => {
  return (
    <FeaturesSection id="features">
      <Wrapper>
        <TextBox>
          <SH1>Download Anything Now A Days</SH1>
          <SH2>
            One of my favourite things I like to watch is the bloopers and
            outtakes that are shown of mistakes made during the making
          </SH2>
        </TextBox>
        <FeaturesBox>
          <Feature />
          <Feature />
          <Feature />
          <Feature />
        </FeaturesBox>
      </Wrapper>
    </FeaturesSection>
  )
}

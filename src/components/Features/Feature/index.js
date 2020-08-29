import React from "react"
import styled from "styled-components"
import FeatIcon from "../../../images/feat.png"

const IconBox = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Icon = styled.div`
  height: 32px;
  width: 32px;
  background: #8cd31a;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  @media (min-width: 425px) {
    height: 38px;
    width: 38px;
  }
  @media (min-width: 768px) {
    height: 48px;
    width: 48px;
  }
`
const FeatureBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;

  @media (min-width: 425px) {
    height: 65px;
  }
  @media (min-width: 1440px) {
    width: 120%;
    padding-left: 35px;
  }
  @media (min-width: 1600px) {
    padding-left: 60px;
    width: 130%;
  }
  @media (min-width: 1900px) {
    padding-left: 135px;
    width: 130%;
  }
`
const TextBox = styled.div`
  height: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 1024px) {
    flex: 3;
  }
  @media (min-width: 1440px) {
    flex: 4;
  }
  @media (min-width: 1600px) {
    flex: 8;
  }
`
const SH3 = styled.h3`
  font-size: 13px;
  font-family: Archivo, sans-serif;
  font-weight: 500;
  color: #304156;

  @media (min-width: 425px) {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    font-size: 15px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 20px;
  }
`
const SH5 = styled.h5`
  font-family: Archivo, sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: #828d99;
  @media (min-width: 425px) {
    font-size: 11px;
  }
  @media (min-width: 768px) {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 15px;
  }
`

const Feature = () => {
  return (
    <FeatureBox>
      <IconBox>
        <Icon>
          <img src={FeatIcon} alt="icon" />
        </Icon>
      </IconBox>
      <TextBox>
        <SH3>Online Messages</SH3>
        <SH5>The moment you think of buying a Web Hosting Plan. </SH5>
      </TextBox>
    </FeatureBox>
  )
}

export default Feature

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
`
const FeatureBox = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
`
const TextBox = styled.div`
  height: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`
const SH3 = styled.h3`
  font-size: 13px;
  font-family: Archivo, sans-serif;
  font-weight: 500;
  color: #304156;
`
const SH5 = styled.h5`
  font-family: Archivo, sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: #828d99;
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

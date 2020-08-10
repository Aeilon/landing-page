import React from "react"
import styled from "styled-components"
import Feature from "./Feature"

const FeaturesSection = styled.section`
  width: 100%;
  height: 500px;
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

const TextBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const SH1 = styled.h1`
  font-family: Archivo, sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: #304156;
  flex: 1;
`
const SH2 = styled.h2`
  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: #304156;
  flex: 1;
`
const FeaturesBox = styled.div`
  width: 100%;
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

export default () => {
  return (
    <FeaturesSection>
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

import React from "react"
import styled from "styled-components"
import SliderElement from "./SliderElement"
import ArrowLeft from "../../images/ArrowLeft.png"
import ArrowRight from "../../images/ArrowRight.png"

const TestimonialsSection = styled.section`
  width: 100%;
  height: 450px;
  display: flex;
  justify-content: center;
  background: #fafbfb;
  padding-bottom: 20px;
  padding-top: 20px;
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
`
const SH1 = styled.h1`
  font-family: Archivo, sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: #304156;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`
const SH2 = styled.h2`
  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: 13px;
  color: #304156;
  flex: 1;
  line-height: 1.4;
`
const SliderBox = styled.div`
  width: 100%;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const Dot = styled.div`
  background: white;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default () => {
  return (
    <TestimonialsSection>
      <Wrapper>
        <TextBox>
          <SH1>People About Us</SH1>
          <SH2>
            Having a baby can be a nerve wracking experience for new parents –
            not the nine months of pregnancy
          </SH2>
        </TextBox>
        <SliderBox>
          <Dot>
            <img src={ArrowLeft} alt="arrow" />
          </Dot>
          <SliderElement />
          <Dot>
            <img src={ArrowRight} alt="arrow" />
          </Dot>
        </SliderBox>
      </Wrapper>
    </TestimonialsSection>
  )
}

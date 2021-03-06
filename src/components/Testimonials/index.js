import React, { useState } from "react"
import styled from "styled-components"
import SliderElementOne from "./SliderElementOne"
import SliderElementTwo from "./SliderElementTwo"
import SliderElementThree from "./SliderElementThree"
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

  @media (min-width: 768px) {
    height: 500px;
  }
  @media (min-width: 1024px) {
    height: 550px;
  }
  @media (min-width: 1440px) {
    height: 600px;
  }
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

  @media (min-width: 1024px) {
    flex: 2;
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
  flex: 1;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 27px;
  }
  @media (min-width: 1024px) {
    font-size: 29px;
    flex: 2;
  }
  @media (min-width: 1440px) {
    font-size: 32px;
    text-align: start;
  }
`
const SH2 = styled.h2`
  font-family: Archivo, sans-serif;
  font-size: 13px;
  color: #304156;
  flex: 1;
  line-height: 1.4;
  font-weight: 500;
  text-align: center;

  @media (min-width: 375px) {
    line-height: 1.4;
  }
  @media (min-width: 425px) {
    line-height: 1.5;
  }
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
`
const SliderBox = styled.div`
  width: 100%;
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    flex: 3;
  }
`
const Dot = styled.div`
  background: white;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background 0.15s;

  &:hover {
    filter: saturate(5);
    background: whitesmoke;
    transition: background 0.15s;
  }
`
const SliderElements = styled.div`
  width: 240px;
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 425px) {
    width: 280px;
  }
  @media (min-width: 768px) {
    width: 720px;
    justify-content: space-around;
  }
  @media (min-width: 1024px) {
    width: 750px;
  }
  @media (min-width: 1440px) {
    width: 850px;
  }
  @media (min-width: 1600px) {
    width: 900px;
  }
`

export default () => {
  const [elements, setElements] = useState({
    first: 1,
    second: 2,
    third: 3,
  })

  const nextFN = () => {
    setElements({
      first: elements.first + 1,
      second: elements.second + 1,
      third: elements.third + 1,
    })
  }
  const prevFN = () => {
    setElements({
      first: elements.first - 1,
      second: elements.second - 1,
      third: elements.third - 1,
    })
  }

  return (
    <TestimonialsSection id="testimonials">
      <Wrapper>
        <TextBox>
          <SH1>People About Us</SH1>
          <SH2>
            Having a baby can be a nerve wracking experience for new parents –
            not the nine months of pregnancy
          </SH2>
        </TextBox>
        <SliderBox>
          <Dot onClick={() => prevFN()}>
            <img src={ArrowLeft} alt="arrow" />
          </Dot>

          <SliderElements>
            <SliderElementOne elements={elements} setElements={setElements} />
            <SliderElementTwo elements={elements} setElements={setElements} />
            <SliderElementThree elements={elements} setElements={setElements} />
          </SliderElements>
          <Dot onClick={() => nextFN()}>
            <img src={ArrowRight} alt="arrow" />
          </Dot>
        </SliderBox>
      </Wrapper>
    </TestimonialsSection>
  )
}

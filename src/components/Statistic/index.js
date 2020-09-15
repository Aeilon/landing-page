import React from "react"
import styled from "styled-components"
import StatisticButton from "./StatisticButton"
import Statistic1 from "../../images/Statistic1.png"
import Statistic2 from "../../images/Statistic2.png"
import Statistic3 from "../../images/Statistic3.png"
import StatisticList from "./StatisticList"

const StatisticSection = styled.section`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: center;
  background: #fafbfb;
  padding-bottom: 20px;
  padding-top: 20px;

  @media (min-width: 375px) {
    height: 700px;
  }
  @media (min-width: 425px) {
    height: 750px;
  }
  @media (min-width: 1440px) {
    height: 657px;
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
    justify-content: center;
    width: 65%;
  }
`
const TextBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 1440px) {
    height: 50%;
    flex: 3;
  }
  @media (min-width: 1600px) {
    flex: 8;
  }
`
const IllustrationBox = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 70%;
    flex: 0;
    height: 500px;
  }
  @media (min-width: 1440px) {
    padding-top: 50px;
    flex: 2;
  }
  @media (min-width: 1600px) {
    flex: 8;
    margin-left: 120px;
  }
  @media (min-width: 1900px) {
    margin-left: 150px;
    flex: 10;
  }
`
const SH1 = styled.h1`
  font-family: Archivo, sans-serif;
  font-weight: 700;
  font-size: 25px;
  color: #304156;
  text-align: center;

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
const SH4 = styled.h4`
  font-family: Archivo, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.3;
  color: #304156;
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
    text-align: start;
  }
`
const Image = styled.img`
  width: 100%;
  height: auto;
  flex: 1;

  @media (min-width: 768px) {
    position: relative;
    width: 80%;
    top: ${props => props.top};
    left: ${props => props.left};
    z-index: ${props => props.zIndex};
  }
  @media (min-width: 1900px) {
    width: 60%;
  }
`

export default () => {
  return (
    <StatisticSection id="statistics">
      <Wrapper>
        <TextBox>
          <SH1>Statistics Coverage</SH1>
          <SH4>
            Click on the link website-hosting-reviews-free and you would know
            why a lot of people consider this link as top notch
          </SH4>
          <StatisticButton />
        </TextBox>
        <IllustrationBox>
          <Image src={Statistic1} alt="1" zIndex="2" />
          <Image src={Statistic2} alt="2" zIndex="3" left="120px" top="-70px" />
          <Image src={Statistic3} alt="3" top="-150px" zIndex="1" />
          <StatisticList />
        </IllustrationBox>
      </Wrapper>
    </StatisticSection>
  )
}

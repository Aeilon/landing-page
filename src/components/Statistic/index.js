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
  justify-content: space-evenly;
`
const IllustrationBox = styled.div`
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
`
const SH4 = styled.h4`
  font-family: Archivo, sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.3;
  color: #304156;
`
const Image = styled.img`
  width: 100%;
  height: auto;
  flex: 1;
`

export default () => {
  return (
    <StatisticSection>
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
          <Image src={Statistic1} alt="1" />
          <Image src={Statistic2} alt="2" />
          <Image src={Statistic3} alt="3" />
          <StatisticList />
        </IllustrationBox>
      </Wrapper>
    </StatisticSection>
  )
}

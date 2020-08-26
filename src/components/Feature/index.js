import React from "react"
import styled from "styled-components"
import Task1 from "../../images/task1.png"
import Task2 from "../../images/task2.png"
import Task3 from "../../images/task3.png"
import StatisticButton from "../Statistic/StatisticButton"

const FeatureSection = styled.section`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: center;
  background: #ffffff;
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
const TasksBox = styled.div`
  width: 100%;
  height: 50%;
  padding-top: 20px;
`
const Image = styled.img`
  width: 70%;
  position: relative;
  top: ${props => props.top};
  left: ${props => props.left};
  z-index: ${props => props.zIndex};
`
const TextBox = styled.div`
  width: 100%;
  display: flex;
  height: 30%;
  flex-direction: column;
  justify-content: space-evenly;
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

export default () => {
  return (
    <FeatureSection>
      <Wrapper>
        <TasksBox>
          <Image src={Task1} alt="task1" top="120px" left="20px" zIndex="3" />
          <Image src={Task2} alt="task2" top="-150px" left="0px" zIndex="2" />
          <Image src={Task3} alt="task3" top="-300px" left="77px" zIndex="1" />
        </TasksBox>
        <TextBox>
          <SH1>Addiction When</SH1>
          <SH4>
            Okay, you’ve decided you want to make money with Affiliate
            Marketing. So, you join some affiliate programs and start submitting
          </SH4>
          <StatisticButton />
        </TextBox>
      </Wrapper>
    </FeatureSection>
  )
}

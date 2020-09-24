import React from "react"
import styled from "styled-components"
import Task1 from "../../images/task1.png"
import Task2 from "../../images/task2.png"
import Task3 from "../../images/task3.png"
import StatisticButton from "../Statistic/StatisticButton"

const FeatureSection = styled.section`
  width: 100%;
  height: 700px;
  display: flex;
  justify-content: center;
  background: #ffffff;
  padding-bottom: 20px;
  padding-top: 20px;

  @media (min-width: 1024px) {
    padding-bottom: 100px;
  }
  @media (min-width: 1440px) {
    height: 679px;
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
  @media (min-width: 1440px) {
    width: 65%;
    flex-direction: row;
  }
`
const TasksBox = styled.div`
  width: 100%;
  height: 50%;
  padding-top: 20px;
  order: 2;

  @media (min-width: 1440px) {
    order: 1;
  }
`
const FirstImage = styled.img`
  width: 70%;
  position: relative;
  top: 120px;
  left: 20px;
  z-index: 3;

  @media (min-width: 375px) {
    top: 100px;
  }
  @media (min-width: 425px) {
    top: 80px;
    left: 40px;
  }
  @media (min-width: 768px) {
    width: 50%;
    top: 70px;
    left: 120px;
  }
  @media (min-width: 1024px) {
    width: 40%;
    top: 70px;
    left: 250px;
  }
  @media (min-width: 1440px) {
    width: 45%;
    top: 70px;
    left: 90px;
  }
  @media (min-width: 1600px) {
    width: 40%;
    top: 80px;
    left: 90px;
  }
  @media (min-width: 1900px) {
    width: 42%;
    top: 100px;
    left: 120px;
  }
`
const SecondImage = styled.img`
  width: 70%;
  position: relative;
  top: -150px;
  left: 0;
  z-index: 2;

  @media (min-width: 375px) {
    top: -180px;
  }
  @media (min-width: 425px) {
    top: -220px;
  }
  @media (min-width: 768px) {
    width: 50%;
    top: -20px;
    left: -260px;
  }
  @media (min-width: 1024px) {
    width: 40%;
    top: -20px;
    left: -180px;
  }
  @media (min-width: 1440px) {
    width: 45%;
    top: -20px;
    left: -260px;
  }
  @media (min-width: 1600px) {
    width: 40%;
    top: -20px;
    left: -260px;
  }
  @media (min-width: 1900px) {
    width: 42%;
    top: -20px;
    left: -250px;
  }
`
const ThirdImage = styled.img`
  width: 70%;
  position: relative;
  z-index: 1;
  top: -300px;
  left: 77px;

  @media (min-width: 375px) {
    top: -350px;
    left: 85px;
  }
  @media (min-width: 425px) {
    top: -430px;
    left: 120px;
  }
  @media (min-width: 768px) {
    width: 50%;
    top: -250px;
    left: 250px;
  }
  @media (min-width: 1024px) {
    width: 40%;
    top: -270px;
    left: 350px;
  }
  @media (min-width: 1440px) {
    width: 45%;
    top: -230px;
    left: 200px;
  }
  @media (min-width: 1600px) {
    width: 40%;
    top: -220px;
    left: 200px;
  }
  @media (min-width: 1900px) {
    width: 42%;
    top: -260px;
    left: 250px;
  }
`

const TextBox = styled.div`
  width: 100%;
  display: flex;
  height: 50%;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    height: 55%;
  }
  @media (min-width: 1440px) {
    order: 2;
    height: 45%;
    width: 80%;
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

export default () => {
  return (
    <FeatureSection id="feature">
      <Wrapper>
        <TasksBox
          data-sal="slide-right"
          data-sal-easing="ease-in-out"
          data-sal-duration="700"
        >
          <FirstImage src={Task1} alt="task1" />
          <SecondImage src={Task2} alt="task2" />
          <ThirdImage src={Task3} alt="task3" />
        </TasksBox>
        <TextBox
          data-sal="slide-up"
          data-sal-easing="ease-in-out"
          data-sal-duration="700"
        >
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

import React from "react"
import styled from "styled-components"
import Dots from "./Dots"

const StatisticBar = styled.div`
  width: 100%;
  height: 66px;
  background: #fafbfb;
  display: flex;
  z-index: 2;

  @media (min-width: 768px) {
    width: 400px;
  }
`
const TextBox = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
`

const SH3 = styled.h3`
  font-family: Archivo, sans-serif;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 1.2px;
  color: #828d99;
  margin-left: 30px;
`

export default () => {
  return (
    <StatisticBar>
      <TextBox>
        <SH3>statistics</SH3>
      </TextBox>
      <Dots />
    </StatisticBar>
  )
}

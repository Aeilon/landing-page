import React from "react"
import styled from "styled-components"
import dot from "../../../images/dot.png"

const AlertBox = styled.div`
  width: 123px;
  height: 28px;
  display: flex;
  flex: 1;
  padding-left: 20px;

  @media (min-width: 768px) {
    flex: 2;
    padding-left: 45px;
    width: 170px;
  }
  @media (min-width: 1440px) {
    padding-left: 0;
    flex: 1;
  }
`
const AlertImg = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const AlertText = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 1600px) {
    flex: 6;
  }
`
const SH3 = styled.h3`
  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #304156;

  @media (min-width: 768px) {
    font-size: 13px;
  }
`

export default () => {
  return (
    <AlertBox>
      <AlertImg>
        <img src={dot} alt="dot" />
      </AlertImg>
      <AlertText>
        <SH3>New Release!</SH3>
      </AlertText>
    </AlertBox>
  )
}

import React from "react"
import styled from "styled-components"
import StatisticIcon from "../../../images/StatisticIcon.png"

const Button = styled.div`
  width: 124px;
  height: 36px;
  cursor: pointer;
  display: flex;
`
const SH3 = styled.h3`
  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: #117dce;

  &:hover {
    color: #135df7;
  }
`
const ImgBox = styled.div`
  flex: 1;
`
const TextBox = styled.div`
  flex: 3;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StatisticButton = () => {
  return (
    <Button>
      <ImgBox>
        <img src={StatisticIcon} alt="icon" />
      </ImgBox>
      <TextBox>
        <SH3>More info </SH3>
      </TextBox>
    </Button>
  )
}

export default StatisticButton

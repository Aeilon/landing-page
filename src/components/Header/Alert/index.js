import React from "react"
import styled from "styled-components"
import dot from "../../../images/dot.png"

const AlertBox = styled.div`
  width: 123px;
  height: 28px;
  display: flex;
  flex: 1;
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
`
const SH3 = styled.h3`
  font-family: Archivo-SemiBold, serif;
  font-size: 13px;
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

import React from "react"
import styled from "styled-components"

const ListBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex: 1;
`
const ImgBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Dot = styled.div`
  background: #73d500;
  border-radius: 100%;
  width: 8px;
  height: 8px;
`
const TextBox = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Element = styled.div`
  width: 75px;
  height: 15px;
  display: flex;
  cursor: pointer;
`
const SH3 = styled.h3`
  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: 10px;
  color: #304156;
`

const StatisticList = () => {
  return (
    <ListBox>
      <Element>
        <ImgBox>
          <Dot />
        </ImgBox>
        <TextBox>
          <SH3>Sharings</SH3>
        </TextBox>
      </Element>
      <Element>
        <ImgBox>
          <Dot />
        </ImgBox>
        <TextBox>
          <SH3>Replyes</SH3>
        </TextBox>
      </Element>
      <Element>
        <ImgBox>
          <Dot />
        </ImgBox>
        <TextBox>
          <SH3>Comments</SH3>
        </TextBox>
      </Element>
    </ListBox>
  )
}

export default StatisticList

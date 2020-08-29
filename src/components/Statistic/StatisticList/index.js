import React from "react"
import styled from "styled-components"

const ListBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex: 1;

  @media (min-width: 768px) {
    position: relative;
    right: 40px;
    bottom: 140px;
  }
  @media (min-width: 1900px) {
    right: 125px;
  }
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

  @media (min-width: 768px) {
    width: 10px;
    height: 10px;
  }
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

  @media (min-width: 768px) {
    width: 100px;
    height: 20px;
  }
`
const SH3 = styled.h3`
  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: 10px;
  color: #304156;

  @media (min-width: 768px) {
    position: relative;
    font-size: 13px;
  }
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

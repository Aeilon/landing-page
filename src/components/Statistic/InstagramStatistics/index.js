import React from "react"
import styled, { css } from "styled-components"
import StatisticList from "../StatisticList"

const InstagramStatistics = styled.div`
  width: 100%;
  height: 406px;
  display: flex;
  flex-direction: column;
  background: #fafbfb;
  z-index: 1;

  @media (min-width: 768px) {
    width: 400px;
  }
`
const CirclesBox = styled.div`
  width: 100%;
  height: 90%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledSVG = styled.svg`
  width: 256px;
  height: 256px;
  transform: rotate(270deg);
`
const SH3 = styled.h3`
  font-size: 21px;
  font-family: Archivo, sans-serif;
  font-weight: 700;
  color: #304156;
  position: absolute;
`
const SH5 = styled.h5`
  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #828d99;
  position: absolute;
  top: 200px;
`
const SCircle = styled.circle`
  fill: none;
  stroke-width: 4;
  stroke-linecap: round;
  stroke: #fd4d7a;

  &:nth-child(1) {
    stroke: #fd4d7a;
    stroke-dasharray: 377;
    stroke-dashoffset: 377;
    ${({ onScreen }) =>
      onScreen &&
      css`
        animation: animate-circle1 1s cubic-bezier(0, 0.23, 1, 0.1);
        animation-fill-mode: forwards;
      `};
  }
  &:nth-child(2) {
    stroke: #ffde00;
    stroke-dasharray: 565;
    stroke-dashoffset: 565;
    ${({ onScreen }) =>
      onScreen &&
      css`
        animation: animate-circle2 1s cubic-bezier(0, 0.23, 1, 0.1);
        animation-fill-mode: forwards;
      `};
  }
  &:nth-child(3) {
    stroke: #c99be4;
    stroke-dasharray: 754;
    stroke-dashoffset: 754;
    ${({ onScreen }) =>
      onScreen &&
      css`
        animation: animate-circle3 1s cubic-bezier(0, 0.23, 1, 0.1);
        animation-fill-mode: forwards;
      `};
  }
`

export default ({ onScreen }) => {
  return (
    <InstagramStatistics>
      <CirclesBox>
        <StyledSVG>
          <SCircle cx="50%" cy="50%" r="60" onScreen={onScreen} />
          <SCircle cx="50%" cy="50%" r="90" onScreen={onScreen} />
          <SCircle cx="50%" cy="50%" r="120" onScreen={onScreen} />
        </StyledSVG>
        <SH3>43.6%</SH3>
        <SH5>Instagram</SH5>
      </CirclesBox>
      <StatisticList />
    </InstagramStatistics>
  )
}

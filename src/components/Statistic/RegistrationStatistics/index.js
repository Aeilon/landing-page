import React from "react"
import styled, { css } from "styled-components"

const RegistrationStatistics = styled.div`
  width: 100%;
  height: 170px;
  z-index: 3;
  display: flex;
  background: #fafbfb;

  @media (min-width: 768px) {
    width: 400px;
    position: absolute;
    left: 100px;
    top: 25px;
  }
  @media (min-width: 1440px) {
    width: 400px;
    position: absolute;
    left: 120px;
    top: 85px;
  }
`
const TextBox = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;

  @media (min-width: 375px) {
    width: 54%;
  }
  @media (min-width: 425px) {
    width: 53%;
  }
`
const RegistrationsBox = styled.div`
  width: 80%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: 425px) {
    height: 60%;
  }
`
const DetailsBox = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  align-items: center;
`

const SH3 = styled.h3`
  font-size: 13px;
  font-family: Archivo, sans-serif;
  font-weight: 500;
  color: #304156;
  margin-left: 30px;

  @media (min-width: 425px) {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    font-size: 15px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
  @media (min-width: 1440px) {
    font-size: 19px;
  }
`
const SH5 = styled.h5`
  font-family: Archivo, sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: #828d99;
  margin-left: 30px;

  @media (min-width: 425px) {
    font-size: 11px;
  }
  @media (min-width: 768px) {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
  @media (min-width: 1440px) {
    font-size: 14px;
  }
`
const SH4 = styled.h4`
  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: #117dce;
  margin-left: 30px;
  cursor: pointer;

  &:hover {
    color: #135df7;
  }

  @media (min-width: 425px) {
    font-size: 13px;
  }
  @media (min-width: 768px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    font-size: 15px;
  }
  @media (min-width: 1440px) {
    font-size: 15px;
  }
`
const SH2 = styled.h2`
  position: absolute;
  font-size: 20px;
  font-family: Archivo, sans-serif;
  font-weight: 500;
  color: #304156;
  bottom: 46%;
  left: 40%;

  @media (min-width: 768px) {
    bottom: 46%;
    left: 43%;
  }
`

const CircleBox = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  @media (min-width: 375px) {
    width: 46%;
  }
  @media (min-width: 425px) {
    width: 47%;
  }
`
const StyledSVG = styled.svg`
  width: 128px;
  height: 128px;
  transform: rotate(270deg);
`
const SCircle = styled.circle`
  fill: none;
  stroke-width: 4;
  transform: translate(5px, 5px);
  stroke-dasharray: 315;
  stroke-dashoffset: 315;
  stroke-linecap: round;

  &:nth-child(1) {
    stroke-dashoffset: 0;
    stroke: #eff4f7;
  }
  &:nth-child(2) {
    stroke-dashoffset: 315;

    ${({ onScreen }) =>
      onScreen &&
      css`
        stroke: #fd4d7a;
        animation: animate-circle 1s cubic-bezier(0, 0.23, 1, 0.1);
        animation-fill-mode: forwards;
      `}
  }
`

export default ({ onScreen }) => {
  return (
    <RegistrationStatistics>
      <TextBox>
        <RegistrationsBox>
          <SH3>Registrations</SH3>
          <SH5>After uploading</SH5>
        </RegistrationsBox>
        <DetailsBox>
          <SH4>Details</SH4>
        </DetailsBox>
      </TextBox>
      <CircleBox>
        <StyledSVG>
          <SCircle cx="50%" cy="50%" r="50" />
          <SCircle cx="50%" cy="50%" r="50" onScreen={onScreen} />
        </StyledSVG>
        <SH2>63%</SH2>
      </CircleBox>
    </RegistrationStatistics>
  )
}

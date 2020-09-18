import React from "react"
import styled from "styled-components"

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
  width: 45%;
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
  width: 100%;
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
  position: relative;
  font-size: 20px;
  font-family: Archivo, sans-serif;
  font-weight: 500;
  color: #304156;
  bottom: 97px;
  left: 58px;

  @media (min-width: 375px) {
    left: 55px;
    bottom: 95px;
  }
  @media (min-width: 425px) {
    left: 62px;
    bottom: 93px;
  }
  @media (min-width: 768px) {
    left: 77px;
    bottom: 95px;
  }
`

const CircleBox = styled.div`
  height: 100%;
  width: 65%;

  @media (min-width: 375px) {
    width: 46%;
  }
  @media (min-width: 425px) {
    width: 47%;
  }
`
const StyledSVG = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(270deg);
  position: relative;
  top: 12px;

  @media (min-width: 375px) {
    top: 20px;
  }
  @media (min-width: 425px) {
    top: 10px;
  }
  @media (min-width: 768px) {
    top: -5px;
  }
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
    stroke-dashoffset: calc(315 - (315 * 63) / 100);
    stroke: #fd4d7a;
    animation: animate-circle 1s cubic-bezier(0, 0.23, 1, 0.1);
    animation-delay: 2s;
  }
  @keyframes animate-circle {
    0% {
      opacity: 0;
      stroke-dashoffset: 315;
    }
    5% {
      opacity: 0.05;
      stroke-dashoffset: 304;
    }
    10% {
      opacity: 0.1;
      stroke-dashoffset: 293;
    }
    15% {
      opacity: 0.15;
      stroke-dashoffset: 282;
    }
    20% {
      opacity: 0.2;
      stroke-dashoffset: 271;
    }
    25% {
      opacity: 0.25;
      stroke-dashoffset: 260;
    }
    30% {
      opacity: 0.3;
      stroke-dashoffset: 249;
    }
    35% {
      opacity: 0.35;
      stroke-dashoffset: 238;
    }
    40% {
      opacity: 0.4;
      stroke-dashoffset: 227;
    }
    45% {
      opacity: 0.45;
      stroke-dashoffset: 216;
    }
    50% {
      opacity: 0.5;
      stroke-dashoffset: 205;
    }
    55% {
      opacity: 0.55;
      stroke-dashoffset: 194;
    }
    60% {
      opacity: 0.6;
      stroke-dashoffset: 183;
    }
    65% {
      opacity: 0.65;
      stroke-dashoffset: 172;
    }
    70% {
      opacity: 0.7;
      stroke-dashoffset: 161;
    }
    75% {
      opacity: 0.75;
      stroke-dashoffset: 150;
    }
    80% {
      opacity: 0.8;
      stroke-dashoffset: 139;
    }
    85% {
      opacity: 0.85;
      stroke-dashoffset: 128;
    }

    90% {
      opacity: 0.9;
      stroke-dashoffset: 122;
    }
    95% {
      opacity: 0.95;
      stroke-dashoffset: 118;
    }
    100% {
      opacity: 1;
      stroke-dashoffset: calc(315 - (315 * 63) / 100);
    }
  }
`

export default () => {
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
          <SCircle cx="80" cy="80" r="50" />
          <SCircle cx="80" cy="80" r="50" />
        </StyledSVG>
        <SH2>63%</SH2>
      </CircleBox>
    </RegistrationStatistics>
  )
}

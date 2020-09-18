import React from "react"
import styled from "styled-components"
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
    stroke-dashoffset: calc(377 - (377 * 87) / 100);
    animation: animate-circle1 1s cubic-bezier(0, 0.23, 1, 0.1);
    animation-delay: 2s;

    @keyframes animate-circle1 {
      0% {
        opacity: 0;
        stroke-dashoffset: 377;
      }
      5% {
        opacity: 0.05;
        stroke-dashoffset: 358.8;
      }
      10% {
        opacity: 0.1;
        stroke-dashoffset: 340.6;
      }
      15% {
        opacity: 0.15;
        stroke-dashoffset: 322.4;
      }
      20% {
        opacity: 0.2;
        stroke-dashoffset: 304.2;
      }
      25% {
        opacity: 0.25;
        stroke-dashoffset: 286;
      }
      30% {
        opacity: 0.3;
        stroke-dashoffset: 267.8;
      }
      35% {
        opacity: 0.35;
        stroke-dashoffset: 249.6;
      }
      40% {
        opacity: 0.4;
        stroke-dashoffset: 231.4;
      }
      45% {
        opacity: 0.45;
        stroke-dashoffset: 213.2;
      }
      50% {
        opacity: 0.5;
        stroke-dashoffset: 195;
      }
      55% {
        opacity: 0.55;
        stroke-dashoffset: 176.8;
      }
      60% {
        opacity: 0.6;
        stroke-dashoffset: 158.6;
      }
      65% {
        opacity: 0.65;
        stroke-dashoffset: 140.4;
      }
      70% {
        opacity: 0.7;
        stroke-dashoffset: 122.2;
      }
      75% {
        opacity: 0.75;
        stroke-dashoffset: 104;
      }
      80% {
        opacity: 0.8;
        stroke-dashoffset: 85.8;
      }
      85% {
        opacity: 0.85;
        stroke-dashoffset: 75;
      }

      90% {
        opacity: 0.9;
        stroke-dashoffset: 67.6;
      }
      95% {
        opacity: 0.95;
        stroke-dashoffset: 58;
      }
      100% {
        opacity: 1;
        stroke-dashoffset: calc(377 - (377 * 87) / 100);
      }
    }
  }
  &:nth-child(2) {
    stroke: #ffde00;
    stroke-dasharray: 565;
    stroke-dashoffset: calc(565 - (565 * 80) / 100);
    animation: animate-circle2 1s cubic-bezier(0, 0.23, 1, 0.1);
    animation-delay: 2s;

    @keyframes animate-circle2 {
      0% {
        opacity: 0;
        stroke-dashoffset: 565;
      }
      5% {
        opacity: 0.05;
        stroke-dashoffset: 540;
      }
      10% {
        opacity: 0.1;
        stroke-dashoffset: 515;
      }
      15% {
        opacity: 0.15;
        stroke-dashoffset: 490;
      }
      20% {
        opacity: 0.2;
        stroke-dashoffset: 465;
      }
      25% {
        opacity: 0.25;
        stroke-dashoffset: 440;
      }
      30% {
        opacity: 0.3;
        stroke-dashoffset: 415;
      }
      35% {
        opacity: 0.35;
        stroke-dashoffset: 390;
      }
      40% {
        opacity: 0.4;
        stroke-dashoffset: 365;
      }
      45% {
        opacity: 0.45;
        stroke-dashoffset: 340;
      }
      50% {
        opacity: 0.5;
        stroke-dashoffset: 315;
      }
      55% {
        opacity: 0.55;
        stroke-dashoffset: 290;
      }
      60% {
        opacity: 0.6;
        stroke-dashoffset: 265;
      }
      65% {
        opacity: 0.65;
        stroke-dashoffset: 240;
      }
      70% {
        opacity: 0.7;
        stroke-dashoffset: 215;
      }
      75% {
        opacity: 0.75;
        stroke-dashoffset: 190;
      }
      80% {
        opacity: 0.8;
        stroke-dashoffset: 165;
      }
      85% {
        opacity: 0.85;
        stroke-dashoffset: 152.5;
      }

      90% {
        opacity: 0.9;
        stroke-dashoffset: 140;
      }
      95% {
        opacity: 0.95;
        stroke-dashoffset: 126;
      }
      100% {
        opacity: 1;
        stroke-dashoffset: calc(565 - (565 * 80) / 100);
      }
    }
  }
  &:nth-child(3) {
    stroke: #c99be4;
    stroke-dasharray: 754;
    stroke-dashoffset: calc(754 - (754 * 70) / 100);
    animation: animate-circle3 1s cubic-bezier(0, 0.23, 1, 0.1);
    animation-delay: 2s;

    @keyframes animate-circle3 {
      0% {
        opacity: 0;
        stroke-dashoffset: 754;
      }
      5% {
        opacity: 0.05;
        stroke-dashoffset: 725;
      }
      10% {
        opacity: 0.1;
        stroke-dashoffset: 696;
      }
      15% {
        opacity: 0.15;
        stroke-dashoffset: 667;
      }
      20% {
        opacity: 0.2;
        stroke-dashoffset: 638;
      }
      25% {
        opacity: 0.25;
        stroke-dashoffset: 609;
      }
      30% {
        opacity: 0.3;
        stroke-dashoffset: 580;
      }
      35% {
        opacity: 0.35;
        stroke-dashoffset: 551;
      }
      40% {
        opacity: 0.4;
        stroke-dashoffset: 522;
      }
      45% {
        opacity: 0.45;
        stroke-dashoffset: 493;
      }
      50% {
        opacity: 0.5;
        stroke-dashoffset: 464;
      }
      55% {
        opacity: 0.55;
        stroke-dashoffset: 435;
      }
      60% {
        opacity: 0.6;
        stroke-dashoffset: 406;
      }
      65% {
        opacity: 0.65;
        stroke-dashoffset: 377;
      }
      70% {
        opacity: 0.7;
        stroke-dashoffset: 348;
      }
      75% {
        opacity: 0.75;
        stroke-dashoffset: 319;
      }
      80% {
        opacity: 0.8;
        stroke-dashoffset: 290;
      }
      85% {
        opacity: 0.85;
        stroke-dashoffset: 276;
      }

      90% {
        opacity: 0.9;
        stroke-dashoffset: 261;
      }
      95% {
        opacity: 0.95;
        stroke-dashoffset: 243;
      }
      100% {
        opacity: 1;
        stroke-dashoffset: calc(754 - (754 * 70) / 100);
        //226
      }
    }
  }
`

export default () => {
  return (
    <InstagramStatistics>
      <CirclesBox>
        <StyledSVG>
          <SCircle cx="50%" cy="50%" r="60" />
          <SCircle cx="50%" cy="50%" r="90" />
          <SCircle cx="50%" cy="50%" r="120" />
        </StyledSVG>
        <SH3>43.6%</SH3>
        <SH5>Instagram</SH5>
      </CirclesBox>
      <StatisticList />
    </InstagramStatistics>
  )
}

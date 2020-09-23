import React from "react"
import styled, { css } from "styled-components"

const Element = styled.div`
  width: 186px;
  height: 178px;
  display: flex;
  position: absolute;
  background: white;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px 0.1px rgba(225, 225, 225, 0.8);

  ${({ elements, setElements }) =>
    elements.third > 3
      ? setElements({ ...elements, third: 1 })
      : elements.third < 1
      ? setElements({ ...elements, third: 3 })
      : css`
          z-index: ${elements.third};
        `};

  @media (min-width: 768px) {
    width: 180px;
    height: 182px;
    display: flex;
    position: static;
    z-index: 1;

    ${({ elements, setElements }) =>
      elements.third > 3
        ? setElements({ ...elements, third: 1 })
        : elements.third < 1
        ? setElements({ ...elements, third: 3 })
        : css`
            order: ${elements.third};
          `};

    ${({ elements }) =>
      elements.third === 2 &&
      css`
        transform: scale(1.15);
        box-shadow: 0 0 5px 0.1px #666;
        z-index: 2;
      `}
  }
  @media (min-width: 1024px) {
    width: 230px;
    height: 220px;
  }
`
const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
`
const MessageBox = styled.div`
  flex: 2;

  @media (min-width: 1024px) {
    flex: 3;
  }
`
const PersonBox = styled.div`
  flex: 1;
  display: flex;
`
const AvatarBox = styled.div`
  flex: 1;
  display: flex;
`
const NameBox = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`
const SH2 = styled.h2`
  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #304156;
  flex: 1;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 17px;
  }
  @media (min-width: 1024px) {
    font-size: 18px;
  }
`
const Dot = styled.div`
  background: #8cd31a;
  color: white;
  border-radius: 100%;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SH4 = styled.h4`
  font-family: Archivo, sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #304156;

  @media (min-width: 768px) {
    font-size: 15px;
  }
  @media (min-width: 1024px) {
    font-size: 16px;
  }
`
const SH5 = styled.h5`
  font-family: Archivo, sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #828d99;

  @media (min-width: 768px) {
    font-size: 13px;
  }
  @media (min-width: 1024px) {
    font-size: 14px;
  }
`
const SH3 = styled.h3`
  font-family: Archivo, sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: white;

  @media (min-width: 768px) {
    font-size: 11px;
  }
  @media (min-width: 1024px) {
    font-size: 12px;
  }
`

const SliderElementThree = ({ elements, setElements }) => {
  return (
    <Element elements={elements} setElements={setElements}>
      <Wrapper>
        <MessageBox>
          <SH2>Will The Democrats Be Able To Reverse</SH2>
        </MessageBox>
        <PersonBox>
          <AvatarBox>
            <Dot>
              <SH3>SW</SH3>
            </Dot>
          </AvatarBox>
          <NameBox>
            <SH4>Steven Wright</SH4>
            <SH5>Company</SH5>
          </NameBox>
        </PersonBox>
      </Wrapper>
    </Element>
  )
}

export default SliderElementThree

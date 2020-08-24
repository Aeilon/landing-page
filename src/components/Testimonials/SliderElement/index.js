import React from "react"
import styled from "styled-components"

const Element = styled.div`
  width: 186px;
  height: 178px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
`
const Wrapper = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
`
const MessageBox = styled.div`
  flex: 2;
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
`
const Dot = styled.div`
  background: #b87ee5;
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
`
const SH5 = styled.h5`
  font-family: Archivo, sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: #828d99;
`
const SH3 = styled.h3`
  font-family: Archivo, sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: white;
`

const SliderElement = () => {
  return (
    <Element>
      <Wrapper>
        <MessageBox>
          <SH2>A Discount Toner Cartridge Is Better Than Ever</SH2>
        </MessageBox>
        <PersonBox>
          <AvatarBox>
            <Dot>
              <SH3>CL</SH3>
            </Dot>
          </AvatarBox>
          <NameBox>
            <SH4>Chris Lages</SH4>
            <SH5>Oneink</SH5>
          </NameBox>
        </PersonBox>
      </Wrapper>
    </Element>
  )
}

export default SliderElement

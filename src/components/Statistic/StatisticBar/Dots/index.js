import React from "react"
import styled from "styled-components"

const DotsBox = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Dot = styled.div`
  background: #b3c0ce;
  height: 6px;
  width: 6px;
  border-radius: 100%;
  margin-right: 2px;
  cursor: pointer;
`

export default () => {
  return (
    <DotsBox>
      <Dot />
      <Dot />
      <Dot />
    </DotsBox>
  )
}

import React from "react"
import styled from "@emotion/styled"
import { jsx, css, keyframes } from "@emotion/core"
import P5Wrapper from "react-p5-wrapper"
import sketch from "../components/sketch"

// Using css prop provides a concise and flexible API to style the components //
const underline = css`
  text-decoration: underline;
`

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

const Frame = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0;
  padding: 0 0;
`

const BottomFrame = styled.div`
  display: flex;
  width: 100%;
  height: 50vh;
  border-top: 2px solid black;
  background: rgba(25, 25, 25, 0.85);
  color: rgb(250, 250, 240);
  ${mq[1]} {
    flex-wrap: wrap;
  }
`

const TopContent = styled.div`
 /* Write something here */
`

const Sketch = styled.div`

`

const bounce = keyframes`
  from {
    filter: blur(10px);
  }

  to {
    filter: blur(0px);
  }
`

export default ({ children }) => (
  <Frame>
    <BottomFrame>
      {children}
    </BottomFrame>
    <Sketch css={css`
    animation: ${bounce} 3s ease 1;
    `}>
      <P5Wrapper sketch={sketch}/>
    </Sketch>

    <Sketch css={css`
    animation: ${bounce} 3s ease 1;
    `}>
      <P5Wrapper sketch={sketch}/>
    </Sketch>
  </Frame>
)

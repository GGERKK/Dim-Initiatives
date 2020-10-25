import React from "react"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Project from "../components/project"

const breakpoints = [576, 768, 992, 1200]

const mq = breakpoints.map(
  bp => `@media (max-width: ${bp}px)`
)

const Container = styled.div`
  margin: 0 auto;
  padding: 0 0;
  width: 50%;
  /* overflow: hidden; */
  ${mq[1]} {
    width: 100%;
  }
`

const About = styled.div`
  display: block;
  margin: 0 auto;
  padding: 18px 12px;
`

export default () => (
  <Layout>
    <Container>
      <About>
        <h1>About the creative practice of Gregory Gerken</h1>
        <p>I'm currently taking on select projects. Send me an email and let's explore working together.</p>
        <a href="">Resume</a>
      </About>
      {/* <Project
        projectname="Marble Croquet"
        excerpt="Product / Game / Craft"
      /> */}
    </Container>
    <Container>
    <p style={{ textAlign:`center`, verticalAlign:`middle` }}>images!</p>
    </Container>
  </Layout>
)

import React from "react"
import styled from "@emotion/styled"

const ProjectWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0;
  margin: 0 0;
  text-align: left;
  border-top: 2px solid black;
  &:hover {
    background: #fbf667;
  }
`

const Description = styled.div`
  flex: 1;
  padding: 12px;
`

const Projectname = styled.h2`
  margin: 0 0;
  padding: 0;
`

const Excerpt = styled.p`
  margin: 0;
`

const Project = props => (
  <ProjectWrapper>
    <Description>
      <Projectname>{props.projectname}</Projectname>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </ProjectWrapper>
)

export default Project

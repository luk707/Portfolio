import React from 'react'
import Layout from '../components/layout'
import { LinkButton } from '../components/button'
import Container from '../components/container'
import Hero from '../components/hero'
import CurveDown from '../components/curve-down'

const IndexPage = () => (
  <Layout>
    <Hero>
      <CurveDown />
    </Hero>
    <Container>
      <h1>Homepage</h1>
      <LinkButton to="/page-2/">Go to page 2</LinkButton>
    </Container>
  </Layout>
)

export default IndexPage

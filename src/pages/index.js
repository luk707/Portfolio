import React from 'react'
import Layout from '../components/layout'
import { LinkButton } from '../components/button'
import Container from '../components/container'
import Hero from '../components/hero'
import CurveDown from '../components/curve-down'
import Section from '../components/section'

const IndexPage = () => (
  <Layout>
    <Hero>
      <Section>
        <Container>
          <LinkButton to="/page-2/">Go to page 2</LinkButton>
        </Container>
      </Section>
      <CurveDown aspectWidth={10} aspectHeight={1} />
    </Hero>
    <Section>
      <Container>
        <h1>Homepage</h1>
        <LinkButton to="/page-2/">Go to page 2</LinkButton>
      </Container>
    </Section>
  </Layout>
)

export default IndexPage

import React from 'react'
import Layout from '../components/layout'
import Content from '../components/content'
import Container from '../components/container'
import Accent from '../components/accent'
import { Small } from '../components/typography'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <Layout>
    <Accent />
    <Container>
      <Content>
        <h1>404</h1>
        <Small>Page not found.</Small>
        <p>
          You just hit a route that doesn&#39;t exist... the sadness. Go to the{' '}
          <Link to="/">homepage</Link> to see my recent posts instead.
        </p>
      </Content>
    </Container>
    <div style={{ height: 20 }} />
  </Layout>
)

export default NotFoundPage

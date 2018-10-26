import React from 'react'
import Layout from '../components/layout'
import Image from '../components/image'
import { LinkButton } from '../components/button'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image />
    </div>
    <LinkButton to="/page-2/">Go to page 2</LinkButton>
  </Layout>
)

export default IndexPage

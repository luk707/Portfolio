import React from 'react'
import Layout from '../components/layout'
import { LinkButton } from '../components/button'

const SecondPage = () => (
  <Layout>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <LinkButton prominence="primary" to="/">
      Go back to the homepage
    </LinkButton>
  </Layout>
)

export default SecondPage

// @flow

import React, { Component } from 'react'
import styled from '@emotion/styled'
import Container from './container'

const FooterWrapper = styled.footer({
  fontFamily: 'Montserrat',
  padding: '60px 0',
  backgroundColor: '#eee',
})

const FooterContainer = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})

type FooterProps = {}

class Footer extends Component<FooterProps> {
  render() {
    return (
      <FooterWrapper>
        <Container>
          <FooterContainer>
            <div>
              <a href="https://twitter.com/_lukeharris">Twitter</a> •{' '}
              <a href="https://github.com/luk707">GitHub</a>
            </div>
            <a href="/rss.xml">RSS</a>
          </FooterContainer>
        </Container>
      </FooterWrapper>
    )
  }
}

export default Footer

// @flow

import React, { Component } from 'react'
import styled from 'react-emotion'

const DecorationAnchor = styled('div')({
  height: 0,
  width: '100%',
  position: 'relative',
})

type DecorationContainerProps = {
  aspectRatio: number,
  top: boolean,
}

const DecorationContainer = styled('div')(
  (props: DecorationContainerProps) => ({
    pointerEvents: 'none',
    position: 'absolute',
    width: `100%`,
    top: props.top ? 0 : undefined,
    bottom: props.top ? undefined : 0,
    paddingTop: `${100 / props.aspectRatio}%`,
  })
)

type DecorationProps = {
  aspectWidth: number,
  aspectHeight: number,
  top: boolean,
}

function decoration(DecorationComponent: Component<{}>) {
  const StyledDecorationComponent = styled(DecorationComponent)({
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  })
  class Decoration extends Component<DecorationProps> {
    render() {
      return (
        <DecorationAnchor>
          <DecorationContainer
            top={this.props.top || false}
            aspectRatio={this.props.aspectWidth / this.props.aspectHeight}
          >
            <StyledDecorationComponent />
          </DecorationContainer>
        </DecorationAnchor>
      )
    }
  }
  return Decoration
}

export default decoration

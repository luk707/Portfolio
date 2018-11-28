// @flow

import React, { Component } from 'react'
import type { Node } from 'react'

type BlogHeaderProps = {
  image: Node,
}

class BlogHeader extends Component<BlogHeaderProps> {
  render() {
    return (
      <div>
        <div>{this.props.image}</div>
        <div>Blog header</div>
      </div>
    )
  }
}

export default BlogHeader

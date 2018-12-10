// @flow

import React, { Component } from 'react'
import type { Node } from 'react'
import Card from './card'
import Row from './row'
import { PostTitle, Small } from './typography'
import { LinkButton } from './button'

type BlogCardProps = {
  title: string,
  excerpt: string,
  slug: string,
  date: string,
  readingTime: string,
  image: Node,
}

class BlogCard extends Component<BlogCardProps> {
  render() {
    return (
      <Card>
        <Row>
          {this.props.image}
          <div>
            <PostTitle>{this.props.title}</PostTitle>
            <Small>
              {this.props.date} &middot; {this.props.readingTime}
            </Small>
            <p>{this.props.excerpt}</p>
            <LinkButton prominence="primary" to={this.props.slug}>
              Read more
            </LinkButton>
          </div>
        </Row>
      </Card>
    )
  }
}

export default BlogCard

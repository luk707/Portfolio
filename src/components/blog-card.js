// @flow

import React, { Component } from 'react'
import Card from './card'
import { PostTitle, Small, Copy } from './typography'

type BlogCardProps = {
  title: string,
  excerpt: string,
  slug: string,
  date: string,
  readingTime: string,
}

class BlogCard extends Component<BlogCardProps> {
  render() {
    return (
      <Card>
        <PostTitle to={this.props.slug}>{this.props.title}</PostTitle>
        <Small>
          {this.props.date} &middot; {this.props.readingTime}
        </Small>
        <Copy>{this.props.excerpt}</Copy>
      </Card>
    )
  }
}

export default BlogCard

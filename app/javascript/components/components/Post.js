import React, { Component } from 'react'
import { CardGroup, Card, CardTitle, CardText } from 'reactstrap'

class Post extends Component {

  render() {
    let { posts } = this.props
    return (
      <>
        <h1>Post Index</h1>
        <CardGroup>
          {posts && posts.map(post => {
            return (
              <Card key={post.id} >
                <CardTitle tag="h4">
                  Post:
                </CardTitle>
                <CardText>
                  {post.post_text}
                </CardText>
              </Card>
            )
          })}
        </CardGroup>
      </>
    )
  }
}

export default Post


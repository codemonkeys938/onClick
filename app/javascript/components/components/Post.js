import React, { Component } from 'react'
import { Card, CardText } from 'reactstrap'

class Post extends Component {

  openPostGroup = (groupId) => {
    const group = this.props.groups.find(group => group.id === groupId)
    this.props.updateGroupView(group)
  }

  render() {
    let { posts } = this.props
    return (
      <>
        <h3>Most Recent Posts:</h3>
        <div className='card-container'>
          {posts && posts.map(post => {
            return (
              <Card
                key={post.id}
                onClick={() => this.openPostGroup(post.group_id)}
              >
                <CardText>
                  {post.post_text}
                </CardText>
              </Card>
            )
          })}
        </div>
      </>
    )
  }
}

export default Post


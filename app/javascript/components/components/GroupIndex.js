import React, { Component } from 'react'
import { CardGroup, Card, CardTitle, CardText } from 'reactstrap'

class GroupIndex extends Component {

  render() {
    let { groups } = this.props
    return (
      <>
        <h1>Group Index</h1>
        <CardGroup>
          {groups && groups.map(group => {
            return (
              <Card key={group.id} onClick={() => this.props.changeGroupView(group)}>
                <CardTitle tag="h4">
                  Group Title:
                </CardTitle>
                <CardText>
                  {group.name}
                </CardText>
                <CardTitle tag="h4">
                  Group Description:
                </CardTitle>
                <CardText>
                  {group.description}
                </CardText>
              </Card>
            )
          })}
        </CardGroup>
      </>
    )
  }
}

export default GroupIndex


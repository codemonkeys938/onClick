import React, { Component } from "react"
import { Card, CardText } from "reactstrap"

class GroupIndex extends Component {
  render() {
    let { groups } = this.props
    return (
      <>
        <h3>Groups To Check Out:</h3>
        <div className="card-container">
          {groups &&
            groups.map((group) => (
              <Card
                key={group.id}
                onClick={() => this.props.updateGroupView(group)}
              >
                <CardText className="group-name">{group.name}</CardText>
              </Card>
            ))}
        </div>
      </>
    )
  }
}

export default GroupIndex

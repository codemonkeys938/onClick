import React, { Component } from 'react'
import { Card, CardText } from 'reactstrap'

class GroupIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        name: '',
        description: ''
      }
    }
  }

  handleChange = e => {
    const { form } = this.state
    form[e.target.name] = e.target.value
    this.setState({ form: form })
  }

  handleSubmit = () => {
    const { form } = this.state
    form.name = ''
    form.description = ''
    this.setState({ form: form })
  }

  render() {
    let { groups } = this.props
    return (
      <>
        <h3>Groups To Check Out:</h3>
        <div className='card-container'>
          {groups && groups.map(group => (
            <Card
              key={group.id}
              onClick={() => this.props.updateGroupView(group)}
            >
              <CardText className='group-name'>
                {group.name}
              </CardText>
            </Card>
          ))}
        </div>
      </>
    )
  }
}

export default GroupIndex


import React, { Component } from 'react'

export class Award extends Component {
  render() {
    return (
      <div className="award">
        <div className="award_number">{this.props.award.number}</div>
        <div className="award_title">{this.props.award.title}</div>
      </div>
    )
  }
}

export default Award
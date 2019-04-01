import React, { Component } from 'react'

export default class Video extends Component {
  render() {
    return (
      <div className="center">
<iframe id="ytplayer" type="text/html" className = "player" 
  src={`http://www.youtube.com/embed/${this.props.video}`}
  frameborder="0"/>
</div>
    )
  }
}

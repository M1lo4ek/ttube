import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
<div className="top">
<div className="opsearch">
<form onSubmit={this.props.gettingVideo}>
<input name="search" placeholder="Search" type="text"></input>
<button>🔍</button>
</form>
</div>
         <h2 className="nt">TTube</h2>
    </div>
    
    )
  }
}



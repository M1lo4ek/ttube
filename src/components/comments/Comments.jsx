import React, { Component } from 'react'

export default class Comments extends Component {
  render() {
      if(
        this.props.comments === undefined
      ) 
      {
       return(
         <div className="bot"><h3>Comments</h3></div>
       ) 
      }
      else{
    
        return (
      <div className="bot">
      <h3>Comments</h3>  
      <li><div>{this.props.comments.items[0].snippet.topLevelComment.snippet.textOriginal}</div></li>
      <li><div>{this.props.comments.items[1].snippet.topLevelComment.snippet.textOriginal}</div> </li>
      <li><div>{this.props.comments.items[2].snippet.topLevelComment.snippet.textOriginal}</div> </li>
  </div>
    )
  }
  }
}

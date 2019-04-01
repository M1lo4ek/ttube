import React, { Component } from 'react'

export default class Videolist extends Component {
  render() {
  if(
    this.props.videolist === undefined
  ) 
  {
   return(
     <div className="right"><h3>Next</h3></div>
   ) 
  }
  else{

    return (
      <div className="right">
  
      <h3> Next </h3> <br/>
      <table>
        <tr>
        <td><img onClick={this.props.listvideo} name = {`${this.props.videolist.items[1].id.videoId}`} src= {this.props.videolist.items[1].snippet.thumbnails.default.url}></img> </td>
       <td> <div onClick={this.props.listvideo} name = {`${this.props.videolist.items[1].id.videoId}`}> {this.props.videolist.items[1].snippet.title}</div> </td>
        </tr>
        <tr>
        <td><img onClick={this.props.listvideo} name = {`${this.props.videolist.items[2].id.videoId}`} src= {this.props.videolist.items[2].snippet.thumbnails.default.url}></img> </td>
       <td> <div onClick={this.props.listvideo} name = {`${this.props.videolist.items[2].id.videoId}`}> {this.props.videolist.items[2].snippet.title}</div> </td>
        </tr>
    </table>
      </div> 
       
    )
  }
}
}

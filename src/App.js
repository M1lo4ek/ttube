import React, { Component } from 'react';
import logo from './logo.svg';
import Comments from './components/comments/Comments.jsx'
import Search from './components/search/Search.jsx'
import Video from './components/video/Video.jsx'
import Videolist from './components/videolist/Videolist.jsx'
import './App.css';

class App extends Component {
  state = {
    video:undefined,
    videolist: undefined,
    comments: undefined
  }
  gettingVideo = async (event) => {
    event.preventDefault();
    var search = event.target.elements.search.value
    var api_url = await
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=6&q=${search}&type=video&key=AIzaSyCMgxtBjv0LhhgPXh0Swpgk1UKlRzY3ktU`)
    var data = await api_url.json();
    console.log(data);
    this.gettingComment(data.items[0].id.videoId);
    this.setState({
      video: data.items[0].id.videoId,
      videolist: data
    });
  }
  
  gettingComment = async (video) => {
    var api_url = await
    fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet&videoId=${video}&key=AIzaSyCMgxtBjv0LhhgPXh0Swpgk1UKlRzY3ktU`)
    var data = await api_url.json();
    console.log(data);

    this.setState({
      comments: data
    });
  }
  
  listvideo = (event) => {
    console.log(event.target.getAttribute('name'))
    this.setState({
video:event.target.getAttribute('name')
    })
  }
  render() {
    return (
      <div className="App">
<Search
gettingVideo={this.gettingVideo}
/>
<Video
  video={this.state.video}
/>
<Videolist
 videolist={this.state.videolist}
 listvideo={this.listvideo}
/>
<Comments
comments={this.state.comments}/>
      </div>
    );
  }
}

export default App;

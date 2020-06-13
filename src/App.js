import React, { Component } from 'react';
import './styles/style.css';
import YTSearch from 'youtube-api-search';
import Seachbar from './Search_bar';
import Videolist from './Video_list';
import Videodetails from './Video-details';

const API_KEY = 'AIzaSyDjUfzUy34hHfv7PTiB-LOfbT_-PuiUtx4';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      term: 'david guetta'
    };

    this.videoSearch(this.state.term);
  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term }, (data) => {
      console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }
  
  render() {
    return (
      <div>
        <Seachbar onSearcChange={ term => this.videoSearch(term) } />
        <div className="container" >
          <div className="row" >
          <Videodetails video={this.state.selectedVideo} />
          <Videolist
          onVideoSelect = { selectedVideo => this.setState({ selectedVideo }) }
          videos={this.state.videos} />
          </div>
          <h5>Develop by : <a href="https://www.linkedin.com/in/aleksandar-georgievski-017b4576"> Aleksandar G</a></h5>
        </div>
      </div>
    );
  }
}

export default App;

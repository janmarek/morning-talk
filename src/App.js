import React, { Component } from 'react';
import Search from './Search';
import VideoList from './VideoList';
import './App.css';

let lastId = 2;

const videos = [
  {id: 1, name: 'Pulp Fiction', description: 'nějaký mafiáni'},
  {id: 2, name: 'Matrix', description: 'a v tomhle žijeme'}
];

class App extends Component {

  constructor() {
    super();
    this.state = {
      page: 'list',
      query: '',
      videos: videos,
      newVideoName: '',
      newVideoDescription: '',
    };
  }

  onAdd() {
    const newVideo = {
      id: ++lastId,
      name: this.state.newVideoName,
      description: this.state.newVideoDescription,
    };

    const newVideos = [
      newVideo,
      ...this.state.videos
    ];

    this.setState({
      videos: newVideos,
      newVideoName: '',
      newVideoDescription: '',
      page: 'list',
    });
  }

  renderList() {
    return <div>
      <Search
        query={this.state.query}
        onSearch={query => this.setState({query})}
      />
      <VideoList
        videos={this.state.videos}
        query={this.state.query}
      />
      <p>
        <button onClick={() => this.setState({page: 'add'})}>
          Add video
        </button>
      </p>
    </div>;
  }

  renderAdd() {
    return <div>
      <p>
        Name:<br/>
        <input
          type="text"
          value={this.state.newVideoName}
          onChange={e => this.setState({newVideoName: e.target.value})}
        />
      </p>
      <p>
        Description:<br/>
        <input
          type="text"
          value={this.state.newVideoDescription}
          onChange={e => this.setState({newVideoDescription: e.target.value})}
        />
      </p>
      <p>
        <button onClick={this.onAdd.bind(this)}>
          Add video
        </button>
      </p>
    </div>;
  }



  render() {
    const page = this.state.page;
    return <div className="App">
      {page === 'list' && this.renderList()}
      {page === 'add' && this.renderAdd()}
    </div>;
  }

}

export default App;

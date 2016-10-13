import React, {Component} from 'react';
import Video from './Video';

export default class extends Component {

  render() {
    const query = this.props.query;
    const videos = this.props.videos.filter(
      video => video.name.indexOf(query) > -1
    );

    return <div className="video-list">
      {videos.map(
          video => <Video
            key={video.id}
            data={video}
          />
      )}
      <p>Showing {videos.length} of {this.props.videos.length}</p>
    </div>;
  }

}

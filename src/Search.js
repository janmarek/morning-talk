import React, {Component} from 'react';

export default class Search extends Component {

  constructor() {
    super();
    this.state = {
      query: '',
    };
  }

  onSearch() {
    this.props.onSearch(this.state.query);
  }

  render() {
    return <div className="search">
        <input
          type="text"
          value={this.state.query}
          onChange={e => this.setState({query: e.target.value})}
        />
        <button onClick={this.onSearch.bind(this)}>OK</button>
    </div>;
  }

}

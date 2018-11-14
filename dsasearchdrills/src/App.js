import React, { Component } from 'react';
import './App.css';

function recursiveSearch(data, searchterm,  start = 0, end = data.length - 1, count = 0) {
  if(start > end) {
    ++count;
    return {found: false, count};
  }
  
  const mid = Math.floor((start + end) / 2);

  if(data[mid] === searchterm) {
    ++count;
    return {found: true, count};
  }

  if(data[mid] > searchterm) {
    return recursiveSearch(data, searchterm, start, mid - 1, ++count);
  }

  if(data[mid] < searchterm) {
    return recursiveSearch(data, searchterm, mid + 1, end, ++count);
  }
}

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      searchValue: '',
      dataSet: props.dataSet,
      noOfTicks: 0,
      found: '',
    }
  }

  linearSearch() {
    const data = this.state.dataSet;
    const search = this.state.searchValue;

    for (let i =0; i < data.length ; i++) {
      if(data[i] === Number(search)) {
        this.setState({noOfTicks: (i + 1), found: 'Search Item Found' });
        return;
      }
    }

    this.setState({noOfTicks: data.length, found: 'Not Found'});
    return;
  }

  binarySearch() {
    const data = this.state.dataSet;
    let searchTerm = Number(this.state.searchValue);

    const result = recursiveSearch(data, searchTerm);
    if(result.found) {
      return this.setState({found: 'Found Number', noOfTicks: result.count});
    } else {
      return this.setState({found: 'Not Found', noOfTicks: result.count});
    }

  }

  render() {
    return (
      <div>
          <input type="text" placeholder="Search Here" value={this.state.searchValue} 
          onChange={(event) => this.setState({searchValue: event.target.value})}/>
          <button type="submit" onClick={() => this.linearSearch()}>Linear Search</button>
          <button type="submit" onClick={() => this.binarySearch()}>Binary Search</button>     
          <h2>{this.state.found}, it took {this.state.noOfTicks} of ticks</h2>
      </div>
    )
  }
}

export default App;

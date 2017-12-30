import React, { Component } from 'react';
import './App.css';

let defaultTextColor = '#000';
let defaultStyle = {
    color:defaultTextColor
};

class Aggregate extends Component {
  render() {
    return (
      <div style={{...defaultStyle,width:'40%',display:'inline-block'}} className="aggregate">
        <h2>Number text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return(
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle,width:'25%',display:'inline-block'}}>
        <img />
        <h3>Playlist Name </h3>
        <ul><li>Song 1</li></ul>
        <ul><li>Song 2</li></ul>
        <ul><li>Song 3</li></ul>
      </div>
    );
  }
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregate/>
        <Aggregate/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

let defaultTextColor = '#000';
let defaultStyle = {
    color:defaultTextColor
};
let fakeServerData = {
   user : {
     name : "Gary",
     playlists :[
       {
         name: 'My favorites',
         songs : [
          {name:'Beat it',duration:3234},
          {name:'MPougatsa me krema',duration:5757},
          {name:'spag boll',duration:672}
        ]
       },
       {
         name: 'Running',
         songs: [
          {name:'Beat it',duration:3234},
          {name:'MPougatsa me krema',duration:5757},
          {name:'spag boll',duration:672}
        ]
       },
       {
         name: 'Codding',
         songs:[
          {name:'Beat it',duration:3234},
          {name:'MPougatsa me krema',duration:5757},
          {name:'spag boll',duration:672}
        ]
       },
       {
         name: 'Yoga',
         songs:[
          {name:'Beat it',duration:3234},
          {name:'MPougatsa me krema',duration:5757},
          {name:'spag boll',duration:672}
        ]
       }
     ]
   }
  
}


class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle,width:'40%',display:'inline-block'}} className="aggregate">
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs,eachPlayList)=>{
      return songs.concat(eachPlayList.songs)
    },[])
    let totalDuration = allSongs.reduce((sum,eachSong)=>{
      return sum + eachSong.duration
    },0);

    console.log(totalDuration);
    return (
  
      <div style={{...defaultStyle,width:'40%',display:'inline-block'}} className="aggregate">
        <h2>{Math.round(totalDuration/60)} hours</h2>
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
  constructor() {
    super();
    this.state = {serverData:{}}
  }

  componentDidMount(){
    setTimeout(() => {

    this.setState({serverData:fakeServerData});

    },1000);
  
  }


  render() {
    return (   
      <div className="App">
       {this.state.serverData.user ? 
        <div>
        <h1>{this.state.serverData.user.name} 's Playlists</h1>
          <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
         <HoursCounter playlists={this.state.serverData.user.playlists}/>
        <Filter/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        </div> : <h1>Loading...</h1>
       }
      </div>
    );
  }
}

export default App;

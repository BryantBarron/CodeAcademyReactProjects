import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList.js';


class Playlist extends React.Component{
  render(){
    return(
      <div className="Playlist">
        <input defaultValue={'New Playlist'}/>
        <!-- Add a TrackList component -->
        <a class="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
}

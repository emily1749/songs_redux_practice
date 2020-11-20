import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Marcarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I want it that way', duration: '1:20' },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

//KEYS HERE WILL BE IN THE STATE OBJECT
//I.E. STATE.SELECTEDSONG
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});

// Given an array of playlists, each represented as an object with name and an array of songs, find the first playlist that contains a song with a specific title using the find() method.

const playlists = [
    {
      name: 'Playlist 1',
      songs: ['Song 1', 'Song 2', 'Song 3'],
    },
    {
      name: 'Playlist 2',
      songs: ['Song 4', 'Song 5', 'Song 6'],
    },
    {
      name: 'Playlist 3',
      songs: ['Song 7', 'Song 8', 'Song 9'],
    },
  ];
  
let search = playlists.find(obj => 
    obj.songs.find(ele=>ele === 'Song 4'));
console.log(search)
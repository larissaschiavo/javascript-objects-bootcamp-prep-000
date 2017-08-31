var `playlist` = {
  Royksopp: 'Only this Moment'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}

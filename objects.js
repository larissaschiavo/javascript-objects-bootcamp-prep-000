var `playlist` = {
  Royksopp: 'Only this Moment',
  Robyn: 'Call Your Girlfriend'
}

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.artistName = songTitle;
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName;
}

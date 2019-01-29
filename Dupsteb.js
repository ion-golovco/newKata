function songDecoder(song){
  song = song.replace(/WUB/g," ").split(/\s+/g).filter(Boolean)
  return song.join(" ")
}
console.log(songDecoder("WUBAWUBWUBBWUBCWUBWUB"))
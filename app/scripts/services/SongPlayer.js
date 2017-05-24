(function() {
     function SongPlayer(Fixtures) {
          var SongPlayer = {};
           var currentAlbum = Fixtures.getAlbum();

/**
* @desc Buzz object audio file
* @type {Object}
*/
          var currentBuzzObject = null;

/**
 * @function setSong
 * @desc Stops currently playing song and loads new audio file as currentBuzzObject
 * @param {Object} song
 */
    var setSong = function(song) {
       if (currentBuzzObject) {
           currentBuzzObject.stop();
           SongPlayer.currentSong.playing = null;
         }

       currentBuzzObject = new buzz.sound(song.audioUrl, {
           formats: ['mp3'],
           preload: true
          });
       SongPlayer.currentSong = song;
    };
/**
* @function playSong
* @desc starts playing song and sets song.playing as true
* @param {Object} song
*/
    var playSong = function(song) {
        currentBuzzObject.play();
        song.playing = true;
      };

/**
* @function getSongIndex
* @desc gets the index of the song
* @param {Object} song
* @return indexOf(song)
*/
  var getSongIndex = function(song) {
     return currentAlbum.songs.indexOf(song);
 };
/**
* @desc Active song object from list of songs
* @type {Object}
*/
      SongPlayer.currentSong = null;

/**
* @function SongPlayer.play
* @desc Plays a song when song is selected in the player bar
* @param {Object} song
*/

    SongPlayer.play = function(song) {
        song = song || SongPlayer.currentSong;
        if (SongPlayer.currentSong !== song) {
          setSong(song);
          playSong(song);
             } else if (SongPlayer.currentSong === song) {
               if (currentBuzzObject.isPaused()) {
                currentBuzzObject.play();
                  }
              }
          };
/**
 * @function SongPlayer.pause
 * @desc pause a currently playing song when song is selected in the player bar
 * @param {Object} song
 */
       SongPlayer.pause = function(song) {
         song = song || SongPlayer.currentSong;
         currentBuzzObject.pause();
         song.playing = false;
          };
/**
 * @function SongPlayer.previous
 * @desc gets the index of the previous song
 */
    SongPlayer.previous = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex--;

      if (currentSongIndex < 0) {
        currentBuzzObject.stop();
        SongPlayer.currentSong.playing = null;
      } else {
           var song = currentAlbum.songs[currentSongIndex];
           setSong(song);
           playSong(song);
       }
    };
    return SongPlayer;

    }

     angular
         .module('blocjams')
         .factory('SongPlayer',['Fixtures',SongPlayer]);
 })();

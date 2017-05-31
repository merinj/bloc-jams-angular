(function() {
     function SongPlayer($rootScope, Fixtures) {
          var SongPlayer = {};
           var currentAlbum = Fixtures.getAlbum();

        /**
        * @desc Buzz object audio file
        * @type {Object}
        */
                  var currentBuzzObject = null;

        /**
        * @function stopSong
        * @desc stops playing song and sets song.playing as null
        * @param {Object} song
        */

                var stopSong = function(song) {
                    currentBuzzObject.stop();
                    SongPlayer.currentSong.playing = null;
                  };

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

                   currentBuzzObject.bind('timeupdate', function() {
                    $rootScope.$apply(function() {
                      SongPlayer.currentTime = currentBuzzObject.getTime();
                      });
                 });

                   SongPlayer.currentSong = song;
              };

        /**
        * @function playSong
        * @desc starts playing song and sets song.playing as true
        * @param {Object} song
        */
              var playSong = function(song) {
                console.log("song coming to play method");
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
         * @desc Current playback time (in seconds) of currently playing song
         * @type {Number}
         */
               SongPlayer.currentTime = null;

       /**
        * @desc Current playback time (in seconds) of currently playing song
        * @type {Number}
        */
              SongPlayer.volume= 80;       

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
       * @desc plays the previous song
       */
          SongPlayer.previous = function() {
            var currentSongIndex = getSongIndex(SongPlayer.currentSong);
            currentSongIndex--;
            if (currentSongIndex < 0) {
              stopSong(song);
            } else {
               var song = currentAlbum.songs[currentSongIndex];
               setSong(song);
               playSong(song);
           }
        };

        /**
         * @function SongPlayer.next
         * @desc plays the next song
         */

            SongPlayer.next= function() {
                var currentSongIndex = getSongIndex(SongPlayer.currentSong);
                currentSongIndex++;
                if (currentSongIndex > currentAlbum.songs.length) {
                  stopSong(song);
                } else {
                  var song = currentAlbum.songs[currentSongIndex];
                  setSong(song);
                  playSong(song);
                }
            };

            /**
             * @function setVolume
             * @desc Set volume of the currently playing song
             * @param {Number} volume
             */
              SongPlayer.setVolume= function(volume) {
                if (currentBuzzObject) {
                 currentBuzzObject.setVolume(volume);
                }
            };

        /**
         * @function setCurrentTime
         * @desc Set current time (in seconds) of currently playing song
         * @param {Number} time
         */
          SongPlayer.setCurrentTime = function(time) {
            if (currentBuzzObject) {
             currentBuzzObject.setTime(time);
            }
        };

  return SongPlayer;

  }

     angular
         .module('blocjams')
         .factory('SongPlayer', ['$rootScope', 'Fixtures', SongPlayer]);
 })();

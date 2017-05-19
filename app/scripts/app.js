(function() {
     function config($stateProvider, $locationProvider) {
       $locationProvider
         .html5Mode({
             enabled: false,
             requireBase: false
         });

       $stateProvider
          .state('landing', {
              url: '/app/',
              controller: 'LandingCtrl as landing',
              templateUrl: '/app/templates/landing.html'
            })
           .state('album', {
               url: '/app/album',
               controller: 'AlbumCtrl as album',
               templateUrl: '/app/templates/album.html'
           })
           .state('collection', {
               url: '/app/collection',
               controller: 'CollectionCtrl as collection',
               templateUrl: '/app/templates/collection.html'
           });
     }

     angular
            .module('blocjams', ['ui.router'])
            .config(config);
    })();

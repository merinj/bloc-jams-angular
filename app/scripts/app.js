(function() {
     function config($stateProvider, $locationProvider) {
       $locationProvider
         .html5Mode({
             enabled: true,
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
               templateUrl: '/app/templates/album.html'
           })
           .state('collection', {
               url: '/collection',
               controller: 'CollectionCtrl as collection',
               templateUrl: '/templates/collection.html'
           });
     }

     angular
            .module('blocjams', ['ui.router'])
            .config(config);
    })();

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
              templateUrl: '/app/templates/landing.html'
            })
           .state('album', {
               url: '/app/album',
               templateUrl: '/app/templates/album.html'
           });
     }

     angular
            .module('blocjams', ['ui.router'])
            .config(config);
    })();

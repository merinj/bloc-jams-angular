(function() {
     function CollectionCtrl(Fixtures) {
<<<<<<< HEAD
       this.albums = Fixtures.getCollection(12);
        }

     angular
         .module('blocjams')
         .controller('CollectionCtrl',['Fixtures' ,CollectionCtrl]);
=======
       this.albums = [];
       this.albums = Fixtures.getCollection(12);
     }

     angular
         .module('blocjams')
         .controller('CollectionCtrl',['Fixtures', CollectionCtrl]);
>>>>>>> checkpoint-7-service2
 })();

(function() {
     function CollectionCtrl(Fixtures) {
       this.albums = [];
       this.albums = Fixtures.getCollection(12);
     }

     angular
         .module('blocjams')
         .controller('CollectionCtrl',['Fixtures', CollectionCtrl]);
 })();

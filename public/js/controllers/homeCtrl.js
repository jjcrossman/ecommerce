angular.module( 'eCommerce' )

.controller( 'homeCtrl', function ( $scope, homeService ) {

  homeService.getProducts()
    .then( response => {
      console.log( response );
      $scope.products = response.data;
    } );

} );

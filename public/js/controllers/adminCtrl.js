angular.module( 'eCommerce' )

.controller( 'adminCtrl', function ( $scope, adminService ) {

  function init () {
    $scope.product = {};
    $scope.whichProduct = "";
  }

  $scope.postProduct = product => {
    adminService.postProduct( product );
    $scope.product = {};
    $scope.productB = {};
    $scope.productC = {};
  };

  $scope.checkProduct = product => {
    adminService.checkProduct( product )
    .then( response => {
      $scope.whichProduct = response.data.title;
    } )
    .catch( error => {
      console.log( `Error in adminCtrl, after firing checkProduct: ${ error }` );
    } );
  };

  $scope.changeProduct = productC => {
    adminService.changeProduct( productC );
    $scope.productC = {};
  };

  $scope.deleteProduct = product => {
    adminService.deleteProduct( product );
    $scope.productB = {};
    $scope.whichProduct = "";
  };

  init();

} );

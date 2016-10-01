angular.module( 'eCommerce' )

.service( 'adminService', function ( $http ) {

  this.postProduct = product => {
    $http.post( "/api/products", product );
  };

  this.checkProduct = product => {
    return $http.get( `/api/products/${ product._id }` );
  }

  this.deleteProduct = product => {
    $http.delete( `/api/products/${ product._id }` );
  }

  this.changeProduct = product => {
    return $http.put( `/api/products/${ product._id }`, product );
  };

} );

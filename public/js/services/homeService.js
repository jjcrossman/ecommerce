angular.module( 'eCommerce' )

.service( 'homeService', function ( $http ) {

  this.getProducts = () => {
    return $http.get( "/api/products" );
  };

} );

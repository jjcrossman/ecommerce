angular.module( 'eCommerce', [ 'ui.router' ] )

.config( function( $urlRouterProvider, $stateProvider ) {

  $urlRouterProvider.otherwise( "/" );

  

} );

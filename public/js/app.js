angular.module( 'eCommerce', [ 'ui.router' ] )

.config( function( $urlRouterProvider, $stateProvider ) {

  $urlRouterProvider.otherwise( "/" );

  $stateProvider
    .state( "home", {
      url: "/"
      , templateUrl: "./js/features/home.html"
      , controller: "homeCtrl"
    } )
    .state( "admin", {
      url: "/admin"
      , templateUrl: "./js/features/admin.html"
      , controller: "adminCtrl"
    } );

} );

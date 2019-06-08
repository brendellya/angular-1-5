/**
 *
 * @ngdoc module
 * @name components.auth
 *
 * @requires ui.router
 * @requires firebase
 *
 * @description
 *
 * This is the auth module. It includes our auth components
 *
 **/
angular
  .module('components.auth', [
    'ui.router',
    'firebase'
  ])
  .config(function ($firebaseRefProvider) {

  var config = {
      apiKey: "AIzaSyADgimQ3phji_kcnJ-Bp8Ur4WdvKM5U2_s",
      authDomain: "angular-1-5.firebaseapp.com",
      databaseURL: "https://angular-1-5.firebaseio.com",
      storageBucket: "angular-1-5.appspot.com",
      messagingSenderId: "966354137435"
    };

    $firebaseRefProvider
      .registerUrl({
        default: config.databaseURL,
        contacts: config.databaseURL + '/contacts'
      });

      firebase.initializeApp(config);
  })
  .run(function ($transitions, $state, AuthService) {

    $transitions.onStart({
        to: function(state){
            return (state.data && state.data.requiredAuth);
        }
    }, function(){
        return AuthService
            .requireAuthentication()
            .catch(function(){
                return $state.target('auth.login');
            })
    });

    $transitions.onStart({
        to: 'auth.*'
    }, function(){
        if(AuthService.isAuthenticated()){
            return $state.target('app');
        }
    });

  });

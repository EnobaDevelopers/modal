(function() {
  'use strict';

  angular
    .module('yeoman')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .state('modal', {
        url: '/modal',
        templateUrl: 'app/modal/modal.html',
        controller: 'ModalController',
        controllerAs: 'modal'
      });

    $urlRouterProvider.otherwise('/');
  }

})();

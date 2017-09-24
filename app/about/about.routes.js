(() => {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state({
        name: 'about',
        url: '/about',
        component: 'about'
      });
  }
})();

(() => {
  'use strict';

  angular
    .module('app')
    .config(config);

  config.$inject = ['$stateProvider'];

  function config($stateProvider) {
    $stateProvider
      .state({
        name: 'calculator',
        url: '/calculator',
        component: 'calculator'
      });
  }
})();

(() => {
  'use strict';

  angular
    .module('app')
    .component('appResult', {
      bindings: {
        value: '<'
      },
      templateUrl: 'app/calculator/result.component.html'
    });
})();

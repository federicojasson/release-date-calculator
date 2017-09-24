(() => {
  'use strict';

  angular
    .module('app')
    .directive('date', date);

  function date() {
    return {
      restrict: 'E',
      scope: {
        value: '='
      },
      templateUrl: 'app/time/date.directive.html'
    };

    // ----------------------

    // TODO
  }
})();

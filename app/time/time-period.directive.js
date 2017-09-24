(() => {
  'use strict';

  angular
    .module('app')
    .directive('time-period', timePeriod);

  function timePeriod() {
    return {
      restrict: 'E',
      scope: {
        value: '='
      },
      templateUrl: 'app/time/time-period.directive.html'
    };

    // ----------------------

    // TODO
  }
})();

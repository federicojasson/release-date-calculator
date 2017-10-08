(() => {
  'use strict';

  angular
    .module('app')
    .factory('calculator', calculator);

  function calculator() {
    return {
      calculate: calculate
    };

    // ----------------------

    function calculate(params) {
      // TODO: calculate
      return [
        {
          name: 'Mocked result 1',
          value: 'Result 1'
        },
        {
          name: 'Mocked result 2',
          value: 'Result 2'
        }
      ];
    }
  }
})();

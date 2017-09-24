(() => {
  'use strict';

  angular
    .module('app')
    .factory('calculator', calculator);

  function calculator() {
    return {
      metrics: metrics
    };

    // ----------------------

    function metrics() {
      // TODO: unmock
      return [
        {
          id: 'key',
          name: 'Name',
          description: 'Description'
        }
      ];
    }

    // TODO: add other periods of arrest
    function calculate(dateOfArrest, sentence) {
      // TODO: unmock
      return {
        key: 'Some text'
      };
    }
  }
})();

(() => {
  'use strict';

  angular
    .module('app')
    .controller('CalculatorController', CalculatorController);

  CalculatorController.$inject = ['calculator'];

  function CalculatorController(calculator) {
    const vm = this;

    vm.dateOfArrest = null;
    vm.sentence = null;
    // TODO: add other periods of arrest
    vm.metrics = calculator.metrics();

    // ----------------------

    // TODO
  }
})();

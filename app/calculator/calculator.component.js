(() => {
  'use strict';

  angular
    .module('app')
    .component('calculator', {
      controller: controller,
      templateUrl: 'app/calculator/calculator.component.html'
    });

  controller.$inject = ['calculator'];

  function controller(calculator) {
    const $ctrl = this;

    $ctrl.$onInit = $onInit;
    $ctrl.setDateOfArrest = setDateOfArrest;

    // ----------------------

    function $onInit() {
      $ctrl.params = {};
      $ctrl.results = null;
    }

    function setDateOfArrest(dateOfArrest) {
      $ctrl.params.dateOfArrest = dateOfArrest;
      $ctrl.results = calculator.calculate($ctrl.params);
    }
  }
})();

(() => {
  'use strict';

  angular
    .module('app')
    .component('calculator', {
      controller: controller,
      templateUrl: 'app/calculator/calculator.component.html'
    });

  function controller() {
    const $ctrl = this;

    $ctrl.$onInit = $onInit;
    $ctrl.setDateOfArrest = setDateOfArrest;

    // ----------------------

    function $onInit() {
      $ctrl.dateOfArrest = null;
    }

    function setDateOfArrest(dateOfArrest) {
      $ctrl.dateOfArrest = dateOfArrest;
    }
  }
})();

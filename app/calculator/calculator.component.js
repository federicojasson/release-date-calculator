(() => {
  'use strict';

  angular
    .module('app')
    .component('calculator', {
      controller: controller,
      templateUrl: 'app/calculator/calculator.component.html'
    });

  function controller() {
    this.$onInit = $onInit;
    this.setDateOfArrest = setDateOfArrest;

    // ----------------------

    function $onInit() {
      this.dateOfArrest = null;
    }

    function setDateOfArrest(dateOfArrest) {
      this.dateOfArrest = dateOfArrest;
    }
  }
})();

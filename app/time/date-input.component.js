(() => {
  'use strict';

  angular
    .module('app')
    .component('appDateInput', {
      bindings: {
        onChange: '&'
      },
      controller: controller,
      templateUrl: 'app/time/date-input.component.html'
    });

  function controller() {
    const $ctrl = this;

    $ctrl.$onInit = $onInit;
    $ctrl.notifyChange = notifyChange;

    // ----------------------

    function $onInit() {
      $ctrl.year = null;
      $ctrl.month = null;
      $ctrl.day = null;
    }

    function notifyChange() {
      const value = {
        year: $ctrl.year,
        month: $ctrl.month,
        day: $ctrl.day
      };

      $ctrl.onChange({ value });
    }
  }
})();

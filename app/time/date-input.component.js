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
    this.$onInit = $onInit;
    this.notifyChange = notifyChange;

    // ----------------------

    function $onInit() {
      this.year = null;
      this.month = null;
      this.day = null;
    }

    function notifyChange() {
      const value = {
        year: this.year,
        month: this.month,
        day: this.day
      };

      this.onChange({ value });
    }
  }
})();

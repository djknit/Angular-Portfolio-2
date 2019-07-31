'use strict';

angular
  .module('core.projects')
  .factory('Projects', [
    'billSplitter',
    'cerebellum',
    'bookSearch',
    function projectsFactory(billSplitter, cerebellum, bookSearch) {
      return [
        bookSearch,
        cerebellum,
        billSplitter
      ];
    }
  ]);
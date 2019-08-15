'use strict';

angular
  .module('core.projects')
  .factory('Projects', [
    'billSplitter',
    'cerebellum',
    'bookSearch',
    'burger',
    'expense',
    'friendFinder',
    'liri',
    'newsScraper',
    'rpg',
    function projectsFactory(
      billSplitter,
      cerebellum,
      bookSearch,
      burger,
      expense,
      friendFinder,
      liri,
      newsScraper,
      rpg
    ) {
      return [
        bookSearch,
        cerebellum,
        expense,
        newsScraper,
        rpg,
        billSplitter,
        burger,
        friendFinder,
        liri
      ];
    }
  ]);
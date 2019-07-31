'use strict';

angular
  .module('linkButton')
  .component('linkButton', {
    templateUrl: 'components/projects-section/project-card/link-button/button.template.html',
    bindings: {
      type: '@',
      url: '@'
    }
  });
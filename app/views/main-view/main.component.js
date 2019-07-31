'use strict';

angular
  .module('mainView')
  .component('mainView', {
    templateUrl: 'views/main-view/main.template.html',
    controller: [
      'Projects',
      function (Projects) {
        this.projects = Projects;
      }
    ]
  });
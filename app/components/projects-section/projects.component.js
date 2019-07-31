'use strict';

angular
  .module('projectsSection')
  .component('projectsSection', {
    templateUrl: 'components/projects-section/projects.template.html',
    controller: [
      'Projects',
      function projectsSectionCtrl(Projects) {
        this.projects = Projects;
        console.log(Projects);
      }
    ]
  });
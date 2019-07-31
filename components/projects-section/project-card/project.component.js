angular
  .module('projectCard')
  .component('projectCard', {
    templateUrl: 'components/projects-section/project-card/project.template.html',
    bindings: {
      project: '<'
    }
  });
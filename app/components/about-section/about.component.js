'use strict';

angular
  .module('aboutSection')
  .component('aboutSection', {
    templateUrl: 'components/about-section/about.template.html',
    controller: function aboutSectionCtrl() {
      this.isExpanded = null;

      this.aboutBasicStyle = function() {
        return {
          get height() {
            if (this.isExpanded === null) return 'auto';
            return this.isExpanded ? this.tallHeight : this.shortHeight;
          }
        }
      };

      this.setHeights = function() {
        this.shortHeight = $('#about-basic > h2').outerHeight(true) + $('#about-basic > p:first-of-type').outerHeight(true);
        this.tallHeight = this.shortHeight + $('#about-basic > p:last-child').outerHeight(true);
      }

      this.aboutBasicHeight = function() {
        if (this.isExpanded === null) return 'auto';
        return this.isExpanded ? this.tallHeight : this.shortHeight;
      }
    }
  });
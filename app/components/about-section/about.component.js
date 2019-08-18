'use strict';

angular
  .module('aboutSection')
  .component('aboutSection', {
    templateUrl: 'components/about-section/about.template.html',
    controller: ['$timeout', '$window', '$scope', function aboutSectionCtrl($timeout, $window, $scope) {
      this.isExpanded = null;
      this.lastPHeight = null;
      this.hideLastP = true;
      this.toggleButtonText = 'Show More'
      this.buttonTextFade = '';
      this.iconFlip = '';

      this.openOrClosed = function() {
        if (this.isExpanded === null) return '';
        else return this.isExpanded ? 'open' : 'closed';
      }

      this.lastPStyle = function() {
        const isHeightSet = this.lastPHeight !== null;
        return {
          height: isHeightSet ? this.lastPHeight + 'px' : 'auto',
          position: this.hideLastP ? 'absolute' : 'static',
          opacity: this.hideLastP ? 0 : 1,
          marginBottom: 0
        }
      }

      this.toggleButtonClass = function() {
        return this.openOrClosed() + ' ' + this.buttonTextFade;
      }

      function setHeight() {
        this.lastPHeight = $('#about-basic > p:last-child').innerHeight();
      }

      this.setHeight = setHeight.bind(this);

      this.setHeight();

      // source: https://stackoverflow.com/questions/31622673/angularjs-watch-window-resize-inside-directive
      let screenWidth = $window.innerWidth;
      angular.element($window).bind('resize', () => {
        const newWidth = $window.innerWidth;
        if (newWidth !== screenWidth) {
          screenWidth = newWidth;
          this.lastPHeight = null;
          if (!this.isExpanded) {
            this.hideLastP = true;
            this.isExpanded = null;
          }
          $scope.$apply();
        }
      });


      this.toggleAboutSection = function() {
        if (this.lastPHeight === null) this.setHeight();
        if (this.isExpanded) {
          this.iconFlip = 'flip-down';
          const self = this;
        }
        else {
          this.iconFlip = 'flip-up';
        }
        this.isExpanded = !this.isExpanded;
        this.hideLastP = false;
        this.buttonTextFade = 'fade-out';
        const self = this;
        $timeout(this.changeButtonText, 1000);
      }

      function changeButtonText() {
        console.log(this)
        if (this.isExpanded) {
          this.toggleButtonText = 'Show Less';
        }
        else {
          this.toggleButtonText = 'Show More';
        }
        this.buttonTextFade = 'fade-in';
      }
      this.changeButtonText = changeButtonText.bind(this);
    }]
  });
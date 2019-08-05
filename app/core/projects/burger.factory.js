'use strict';

angular
  .module('core.projects')
  .factory('burger', [
    'Tech',
    'ParagraphPieces',
    function(Tech, ParagraphPieces) {
      return {
        name: 'Eat-da-Burger',
        imageUrl: 'images/burger.png',
        description: {
          pieces: [
            ParagraphPieces.Text(
              'Eat-da-Burger is a simple looking application with a little more going on behind the scenes. This is the first complete app that I built using the model-view-controller file structure. The user may enter the name of a burger they would like to eat. The burger appears on the left side of the page with a button labeled "Devour!" The user may add as many burgers as they would like. When the "Devour!" button is pressed, the burger moves to the right side of the page to show that it has been devoured. All data is stored in a MySQL database. This app uses three of the four CRUD methods (create, read, and update).'
            )
          ]
        },
        role: 1,
        tech: {
          front: Tech.mapIdsToData([
            'handlebars',
            'jQuery'
          ]),
          back: Tech.mapIdsToData([
            'node',
            'express',
            'mySql'
          ]),
          apis: []
        },
        notes: [],
        links: {
          repo: 'https://github.com/djknit/burger',
          live: 'https://devourdaburger.herokuapp.com/',
          readme: 'documents/burger.html'
        }
      }
    }
  ]);
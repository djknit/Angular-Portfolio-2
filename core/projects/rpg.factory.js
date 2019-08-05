'use strict';

angular
  .module('core.projects')
  .factory('rpg', [
    'Tech',
    'ParagraphPieces',
    function(Tech, ParagraphPieces) {
      return {
        name: 'Food Fight RPG',
        imageUrl: 'images/rpg.png',
        description: {
          pieces: [
            ParagraphPieces.Text(
              "Food Fight is an RPG game written with HTML, CSS, and Javascript. The jQuery Javascript library is used for DOM interaction. The player begins the game by selecting a character to play as. They must then battle their enemies one at a time. The player wins when they have defeated all the enemies and loses if their character is defeated. The player's character deals more damage with each attack, but the opponents' counter attack scores are not increased. The game can be both won and lost when playing as any given character."
            )
          ]
        },
        role: 1,
        tech: {
          front: Tech.mapIdsToData([
            'jQuery'
          ]),
          back: [],
          apis: []
        },
        notes: [],
        links: {
          repo: 'https://github.com/djknit/Food-Fight',
          live: 'https://djknit.github.io/Food-Fight',
          readme: 'documents/rpg.html'
        }
      }
    }
  ]);
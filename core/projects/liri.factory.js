'use strict';

angular
  .module('core.projects')
  .factory('liri', [
    'Tech',
    'ParagraphPieces',
    function(Tech, ParagraphPieces) {
      return {
        name: 'LIRI',
        imageUrl: 'images/liri.png',
        description: {
          pieces: [
            ParagraphPieces.Text(
              "LIRI, the Language Interpretation and Recognition Interface, is a command-line-interface (CLI) app built with Node.js. LIRI accepts four commands. The \"concert-this\" command searches the Bandsintown API for upcoming performances by the artist provided by the user. The \"spotify-this-song\" command queries the Spotify API for information about the user-specified song. The \"movie-this\" command searches the OMDB API for information about the user-specified movie. Results are printed in the console and also recorded in a '.txt' file."
            )
          ]
        },
        role: 1,
        tech: {
          front: [],
          back: Tech.mapIdsToData([
            'node',
            'request',
            'moment',
            'dotenv'
          ]),
          apis: Tech.mapIdsToData([
            'bandsInTown',
            'spotify',
            'omdb'
          ])
        },
        notes: [],
        links: {
          repo: 'https://github.com/djknit/liri-node-app',
          video: 'https://www.youtube.com/watch?v=GGi05Dj_tzY',
          readme: 'documents/liri.html'
        }
      }
    }
  ]);
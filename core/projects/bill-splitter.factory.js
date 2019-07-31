'use strict';

angular
  .module('core.projects')
  .factory('billSplitter', [
    'Tech',
    'ParagraphPieces',
    function billSplitter(Tech, ParagraphPieces) {
      return {
        name: 'Delux Bill Splitter',
        imageUrl: 'images/bill_splitter.png',
        description: {
          pieces: [
            ParagraphPieces.Text(
              'This is a project that I am especially passionate about because it is inspired by a problem that I have dealt with and it is a tool that I plan to use myself. The situation that inspired the app was when I wanted to help myself and my four roommates to split the rent and bills (which were not all paid by the same person) so that we would minimize the number of payments we had to make between each other. You can read more about the problem that inspired the app in the '
            ),
            ParagraphPieces.Link(
              'Inspiration',
              'documents/bill-splitter.html#inspiration'
            ),
            ParagraphPieces.Text(
              ' section of the Readme. In addition to the problem that inspired the app, my goal is to make sure that the app can easily be used for any possible bill splitting situation that could arise.'
            )
          ]
        },
        role: 1, // indicates sole developer
        tech: {
          front: Tech.mapIdsToData([
            'angularJs',
            'bootstrap',
            'angularSeed'
          ]),
          back: Tech.mapIdsToData([
            'node',
            'express'
          ]),
          apis: []
        },
        notes: [],
        links: {
          repo: 'https://github.com/djknit/Delux-Bill-Splitter',
          live: 'https://delux-bill-splitter.herokuapp.com/',
          readme: 'documents/bill-splitter.html'
        }
      };
    }
  ]);
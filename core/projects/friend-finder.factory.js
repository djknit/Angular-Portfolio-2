'use strict';

angular
  .module('core.projects')
  .factory('friendFinder', [
    'Tech',
    'ParagraphPieces',
    function(Tech, ParagraphPieces) {
      return {
        name: 'Friend Finder',
        imageUrl: 'images/friend_finder.png',
        description: {
          pieces: [
            ParagraphPieces.Text(
              "Friend Finder is a survey based matchmaker app powered by an Express server. The input form accepts the user's name, a link to a picture, and their answers to 10 survey questions (with answers being agree/disagree on a scale of 1-5). The input is validated on the front end to ensure that all the questions were answered before being posted to the server with jQuery's Ajax method. On the server side, the new user's answers are compared to the answers of all existing users to find the existing user(s) whose answers most closely match the new user's answers. The new user is added to the users array and their match is returned by the server. The front end then display's the match."
            )
          ]
        },
        role: 1,
        tech: {
          front: Tech.mapIdsToData([
            'bootstrap',
            'jQuery'
          ]),
          back: Tech.mapIdsToData([
            'node',
            'express'
          ]),
          apis: []
        },
        notes: [],
        links: {
          repo: 'https://github.com/djknit/Friend-Finder',
          live: 'https://people-matcher.herokuapp.com/',
          readme: 'documents/friend-finder.html'
        }
      }
    }
  ]);
'use strict';

angular
  .module('core.projects')
  .factory('bookSearch', [
    'Tech',
    'ParagraphPieces',
    function bookSearch(Tech, ParagraphPieces) {
      return {
        name: 'Book Search',
        imageUrl: 'images/book_search.png',
        description: {
          pieces: [
            ParagraphPieces.Text(
              "This app uses the Google Books API to allow users to search for books. Information and links for the books are displayed together. Users may save book information to the database. Books can be saved to the public list which is shared among all users or to the user's private list. Authentication is managed using the Passport.js Local Strategy. Passwords are hashed before being saved to the database. Authentication is verified each time a user attempts to access their data. A password reset link is generated upon a user's request and sent to the email address associated with the user's account."
            )
          ]
        },
        role: 1, //sole developer
        tech: {
          front: Tech.mapIdsToData([
            'react',
            'bulma',
            'node',
            'axios',
            'moment'
          ]),
          back: Tech.mapIdsToData([
            'node',
            'express',
            'passport',
            'mongo',
            'mongoose',
            'nodemailer',
            'bcrypt',
            'axios'
          ]),
          apis: Tech.mapIdsToData([
            'googleBooks'
          ])
        },
        notes: [
          {
            pieces: [
              ParagraphPieces.Text(
                'Many of the features of this app can be used without an account. If you wish to create an account, you can do so with only a username and password. For these reasons, there is no guest account for this app.'
              )
            ]
          }
        ],
        links: {
          repo: 'https://github.com/djknit/google-books-search/',
          live: 'https://daves-book-search.herokuapp.com/',
          readme: 'documents/book-search.html'
        }
      };
    }
  ]);
'use strict';

angular
  .module('core.projects')
  .factory('expense', [
    'Tech',
    'ParagraphPieces',
    function(Tech, ParagraphPieces) {
      return {
        name: 'Expense',
        imageUrl: 'images/expense.png',
        description: {
          pieces: [
            ParagraphPieces.Text(
              'A finance tracker built with Vue.js. The user must create an account. After creating their account and with every login they are routed to their dashboard where they can view and update their expenses and budgets. The dashboard consists of 4 elements: Receipt Que, Budgets, Transactions, and Upcoming bills. The user will keep the dashboard information up to date by manually adding in all of their new expenses.'
            )
          ]
        },
        role: 'Part of a four person team. I was responsible for user authentication with Passport.js, most of the API routes, deployment to Heroku with JawsDB, and Express server configuration. I also wrote most of the controller functions on the back end and a couple of the forms on the front end.',
        tech: {
          front: Tech.mapIdsToData([
            'vue',
            'bootstrap',
            'jQuery'
          ]),
          back: Tech.mapIdsToData([
            'passport',
            'node',
            'express',
            'mySql',
            'sequelize'
          ]),
          apis: []
        },
        notes: [
          {
            pieces: [
              ParagraphPieces.Text(
                'The "Deployed Page" link below will automatically log you in to the guest account.'
              ),
              ParagraphPieces.Break(),
              ParagraphPieces.Text(
                'If you wish to create your own account, use '
              ),
              ParagraphPieces.Link(
                'this link',
                'https://quiet-spire-74175.herokuapp.com/'
              ),
              ParagraphPieces.Text('.')
            ]
          }
        ],
        links: {
          repo: 'https://github.com/djknit/Expense',
          live: 'https://quiet-spire-74175.herokuapp.com/guest-login/',
          readme: 'documents/expense.html'
        }
      }
    }
  ]);
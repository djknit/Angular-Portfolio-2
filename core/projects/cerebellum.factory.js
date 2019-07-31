'use strict';

angular
  .module('core.projects')
  .factory('cerebellum', [
    'Tech',
    'ParagraphPieces',
    function billSplitter(Tech, ParagraphPieces) {
      return {
        name: 'Cerebellum',
        imageUrl: 'images/cerebellum.png',
        description: {
          pieces: [
            ParagraphPieces.Text(
              "A social network dedicated to the sharing and building of knowledge. Users can post ideas and article links, search for other users, and save posts to their personal Knowledge Base. Standard social media features such as commenting on posts, editing and deleting posts, and creating a profile with a profile picture are available."
            )
          ]
        },
        role: "Part of a three person team. I was responsible for user authentication with Passport, Express.js server setup, MongoDB setup, database models and controllers, API routes, and mobile responsiveness. I was also responsible for integrating Nodemailer, Vue Croppa, and the Meetup API into the project.",
        tech: {
          front: Tech.mapIdsToData([
            'vue',
            'bootstrap',
            'node',
            'axios',
            'veeValidate',
            'vueCroppa'
          ]),
          back: Tech.mapIdsToData([
            'passport',
            'node',
            'express',
            'mongo',
            'mongoose',
            'axios',
            'nodemailer'
          ]),
          apis: Tech.mapIdsToData([
            'meetup',
            'linkPreview'
          ])
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
                'https://cerebellum-network.herokuapp.com/'
              ),
              ParagraphPieces.Text('.')
            ]
          }
        ],
        links: {
          repo: 'https://github.com/huntertrammell/Dev-Social-Network/',
          live: 'https://cerebellum-network.herokuapp.com/guest-login/',
          readme: 'documents/cerebellum.html'
        }
      };
    }
  ]);
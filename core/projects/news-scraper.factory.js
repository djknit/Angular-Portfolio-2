'use strict';

angular
  .module('core.projects')
  .factory('newsScraper', [
    'Tech',
    'ParagraphPieces',
    function(Tech, ParagraphPieces) {
      return {
        name: 'NPR News Scraper',
        imageUrl: 'images/news_scraper.png',
        description: {
          pieces: [
            ParagraphPieces.Text(
              'When the user presses the scrape button, the app scrapes the '
            ),
            ParagraphPieces.Link(
              'NPR news site',
              'https://www.npr.org/sections/news/'
            ),
            ParagraphPieces.Text(
              ' for article headlines, pictures, links, and summaries. If there are already articles in the database, the new article headlines are compared against the ones in the database to prevent duplicates and up to 8 new articles are saved in the database. The article information is displayed along with a link to the article and a comment section. The comment section is contained in a modal. The comments for the chosen article are retrieved from the database when the modal is opened.'
            )
          ]
        },
        role: 'Sole Developer',
        tech: {
          front: Tech.mapIdsToData([
            'handlebars',
            'bootstrap',
            'jQuery'
          ]),
          back: Tech.mapIdsToData([
            'node',
            'express',
            'mongo',
            'mongoose',
            'axios',
            'cheerio'
          ]),
          apis: []
        },
        notes: [],
        links: {
          repo: 'https://github.com/djknit/news-scraper/',
          live: 'https://daves-news-scraper.herokuapp.com/',
          readme: 'documents/news-scraper.html'
        }
      }
    }
  ]);
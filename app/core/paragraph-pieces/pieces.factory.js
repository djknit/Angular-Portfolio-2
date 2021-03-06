'use strict';

angular
  .module('core.paragraphPieces')
  .factory(
    'ParagraphPieces',
    function paragraphPiecesFactory() {
      return {
        Text(text) {
          return {
            type: 'text',
            text
          }
        },
        Break() {
          return {
            type: 'line break'
          }
        },
        Link(text, url) {
          return {
            type: 'link',
            text,
            url
          }
        }
      };
    }
  );
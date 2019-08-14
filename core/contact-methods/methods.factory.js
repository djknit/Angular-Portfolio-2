'use strict';

angular
  .module('core.contactMethods')
  .factory('ContactMethods', [
    function contactMethodsFactory() {

      function ContactMethod(link, text, logo) {
        return {
          link,
          text,
          logo
        }
      }

      function Link(url, isBrowser) {
        return {
          url,
          notForBrowser: isBrowser === false
        }
      }

      function Text(top, bottom) {
        return {
          top,
          bottom
        }
      }

      function Logo(type, content, alt) {
        let contentKey;
        if (type === 'text') contentKey = 'text';
        else if (type === 'image') contentKey = 'url';
        else if (type === 'icon') contentKey = 'class';
        else throw new Error(`Invalid contact method type: "${type}"`);
        return {
          type,
          [contentKey]: content,
          alt
        }
      }

      return [
        ContactMethod(
          Link('mailto:djknit@gmail.com', false),
          Text('Send me an e-mail:', 'djknit@gmail.com'),
          Logo('image', 'images/email.png', 'Email symbol')
        ),
        ContactMethod(
          Link('https://www.linkedin.com/in/djknit/'),
          Text('Or visit my'),
          Logo('image', 'images/linked_in_logo.png', 'LinkedIn logo')
        ),
        ContactMethod(
          Link('https://github.com/djknit/'),
          Text('Or my'),
          Logo('image', 'images/github_logo.png', 'GitHub logo')
        ),
        ContactMethod(
          Link('tel:+1-785-410-5644', false),
          Text('Call or text', '(785) 410-5644'),
          Logo('icon', 'fas fa-phone')
        ),
        ContactMethod(
          Link('documents/Resume-David-Knittel.pdf'),
          Text('Download my'),
          Logo('text', 'Resume')
        )
      ];

    }
  ]);
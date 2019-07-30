'use strict';

angular
  .module('core.tech')
  .factory('Technologies', [
    function techFactory() {

      function Technology(name, url) {
        return {
          name,
          url
        }
      }

      return {
        react: Technology('React', 'https://reactjs.org/'),
        bulma: Technology('Bulma', 'https://bulma.io/'),
        bootstrap: Technology('Bootstrap', 'https://getbootstrap.com/'),
        node: Technology('Node', 'https://nodejs.org/en/about/'),
        axios: Technology('Axios', 'https://www.npmjs.com/package/axios/'),
        moment: Technology('Moment', 'https://momentjs.com/'),
        express: Technology('Express', 'https://expressjs.com/'),
        passport: Technology('Passport', 'https://www.passportjs.org/'),
        mongo: Technology('MongoDB', 'https://www.mongodb.com/what-is-mongodb/'),
        mongoose: Technology('Mongoose', 'https://mongoosejs.com/'),
        nodemailer: Technology('Nodemailer', 'https://nodemailer.com/about/'),
        bcrypt: Technology('Bcrypt', 'https://www.npmjs.com/package/bcrypt/'),
        googleBooks: Technology('Google Books API', 'https://developers.google.com/books/'),
        handlebars: Technology('Handlebars', 'https://handlebarsjs.com/'),
        jQuery: Technology('jQuery', 'https://jquery.com/'),
        mySql: Technology('MySQL', 'https://dev.mysql.com/doc/refman/8.0/en/introduction.html'),
        vue: Technology('Vue', 'https://vuejs.org/'),
        veeValidate: Technology('VeeValidate', 'https://baianat.github.io/vee-validate/'),
        vueCroppa: Technology('Vue Croppa', 'https://zhanziyang.github.io/vue-croppa/#/'),
        meetup: Technology('Meetup API', 'https://www.meetup.com/meetup_api/'),
        linkPreview: Technology('Link Preview API', 'https://www.linkpreview.net/'),
        sequelize: Technology('Sequelize', 'http://docs.sequelizejs.com/'),
        cheerio: Technology('Cheerio', 'https://github.com/cheeriojs/cheerio#readme'),
        bandsInTown: Technology('BandsInTown API', 'https://www.artists.bandsintown.com/bandsintown-api'),
        spotify: Technology('Spotify API', 'https://developer.spotify.com/documentation/web-api/'),
        omdb: Technology('OMDB API', 'http://www.omdbapi.com/'),
        angularJs: Technology('AngularJS', 'https://angularjs.org/'),
        angularSeed: Technology('Angular-seed', 'https://github.com/angular/angular-seed#readme'),
        request: Technology('Request', 'https://www.npmjs.com/package/request'),
        dotenv: Technology('Dotenv', 'https://www.npmjs.com/package/dotenv')
      }
    }
  ]);
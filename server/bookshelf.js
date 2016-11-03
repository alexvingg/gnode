var knex = require('knex')({
    client: 'mysql',
    connection: {
        host     : '127.0.0.1',
        user     : 'root',
        password : 'root',
        database : 'node-angular',
        charset  : 'utf8'
    }
});

var bookshelf = require('bookshelf')(knex);

bookshelf.plugin('pagination');

module.exports = bookshelf;
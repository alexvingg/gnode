var bookshelf = require('../server/bookshelf');

var Projeto = bookshelf.Model.extend({
    tableName: 'projetos'
});

module.exports = Projeto;
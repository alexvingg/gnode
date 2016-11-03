var bookshelf = require('../bookshelf');

var Cargo = bookshelf.Model.extend({
    tableName: 'cargos'
});

module.exports = Cargo;
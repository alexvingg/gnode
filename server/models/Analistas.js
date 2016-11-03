var bookshelf = require('../server/bookshelf');

var Cargo = require('./Cargos');


var Analista = bookshelf.Model.extend({
    tableName: 'analistas',
    cargos: function() {
        return this.hasMany(Cargo);
    }
});

module.exports = Analista;
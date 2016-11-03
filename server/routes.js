var express    = require('express');
var router = express.Router();


(function(){
    var controller = require('./controllers/cargo.controller');
    router.route('/cargos/:cargo_id').get(controller.index);
    router.route('/cargos').get(controller.index);
    router.route('/cargos').post(controller.save);
    router.route('/cargos/:cargo_id').put(controller.edit);
    router.route('/cargos/:cargo_id').delete(controller.delete);
})();


module.exports = router;

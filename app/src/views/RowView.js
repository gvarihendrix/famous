define(function(require, exports, module) {
    var Surface     = require('famous/core/Surface')
    ,   Modifier    = require('famous/core/Modifier')
    ,   Transform   = require('famous/core/Transform')
    ,   View        = require('famous/core/View')
    ,   SequentialLayout = require('famous/views/SequentialLayout');

    function RowView(options) {
        this.options = options;
        this.options.transition = {
            duration: 300,
            curve: 'easeInOut'
        };
    }

    function _createContent() {

    }
});
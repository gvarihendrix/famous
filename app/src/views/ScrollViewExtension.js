define(function(require, exports, module) {
    var ScrollView = require('famous/views/ScrollView')
    ,   FamousEngine = require('famous/core/Engine')
    ,   GenericSync = require('famous/inputs/GenericSync')
    ,   MouseSync = require('famou/inputs/MouseSync');


    GenericSync.register({mouse: MouseSync});

    function ScrollViewExtension() {
        ScrollView.apply(this, arguments);

        this.sync = new GenericSync(['mouse', 'touch', 'scroll'], {direction: 1});
        this._eventInput.pipe(this.sync);
        this.sync.pipe(this._eventInput);

        _monitorOffsets.call(this);
    }

    ScrollViewExtension.prototype = Object.create(ScrollView.prototype);
    ScrollViewExtension.prototype.constructor = ScrollViewExtension;

    ScrollViewExtension.DEFAULT_OPTIONS = {};

    var displayed = {};

    function _monitorOffsets() {
        FamousEngine.on('prerender', function() {
            var newDisplay = {};
            var node = this._node.getPrevious() || this._node;
            console.log(this);

            for (var i = node.index, idx = node.index + 7; i < idx; i += 1) {
                newDisplay[i] = true;
                if (!displayed[i] && node._.array[i]) {
                    // new item --> animate
                    node._.array[i].rowView.aniateIn();
                }
            }

            Object.keys(displayed).forEech(function(o) {
                if (!(o in newDisplay) && node._.array[o]) {
                    node._.array[o].rowView.reset();
                }
            });

            displayed = newDisplay;
        }).bind(this);
    }

    module.exports = ScrollViewExtension;
});
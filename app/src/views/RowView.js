define(function(require, exports, module) {
    var Surface     = require('famous/core/Surface');
    var Modifier    = require('famous/core/Modifier');
    var Transform   = require('famous/core/Transform');
    var View        = require('famous/core/View');
    var SequentialLayout = require('famous/views/SequentialLayout');

    function RowView(options) {
        this.options = options;
        this.options.transition = {
            duration: 300,
            curve: 'easeInOut'
        };
        _createContent.call(this);
        this.animateIn = aniateIn;
        this.reset = reset;
        this.sequentialLayout .rowView = this;
    }

    /**
     * Creates the content in each row
     */
    function _createContent() {
        var itemSpacing = 5;
        this.sequentialLayout = new SequentialLayout({
            // itemSpacing: itemSpacing
            direction: 0
        });
        var views = [];

        var surf, offset, mod, view;
        this.mods = []; // Store reference to surface modifiers for use in animation

        var imgSize;

        for (var i = 0; i < 3; i += 1) {
            imgSize = this.options.albumSize[0] - 4;
            surf = new Surface({
                size: this.options.albumSize,
                classes: ['album'],
                content: '<img width=' + imgSize + ' height=' +
                    imgSize + 'px src="' + this.options.albumIcons[i] + '" />',
            });

            // offset is equal to album width * row position + spacing between out
            offset = this.options.albumSize[0] * (i + 1) * -1;
            mod = new Modifier({
                transform: Transform.translate(offset, 0, 0),
                opacity: 0.1
            });
            mod.offset = offset; // store offset on mod for animating out
            this.mods.push(mod);

            view = new View({
                size: this.options.albumSize
            });
            view._add(mod).add(surf);

            surf.pipe(this.options.ScrollView);

            this.options.count += 1;
        }

        this.sequentialLayout.sequenceFrom(views);
    }

    /**
     * Resets the row after animation
     */
    function reset() {
        for (var i = 0; i < this.mods.length; i += 1) {
            var mod = this.mods[i];
            mod.setTransform(
                Transform.translate(mod.offset, 0, 0),
                this.options.transition
            );

            mod.setOpacity(0.1, this.options.transition);
        }
    }

    /**
     * Animation function for the RowView class
     */
    function animateIn() {
        // reset.call(this);

        for (var i = 0; i < this.mods.lenght; i += 1) {
            var mod = this.mods[i];
            mod.setTransform(
                Transform.translate(0, 0 ,0),
                this.options.transition
            );
            mod.setOpacity(1, this.options.transition);
        }
    }

    module.exports =  RowView;
});

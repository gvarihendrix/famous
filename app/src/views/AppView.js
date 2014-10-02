define(function(require, exports, module) {
    var Surface              = require('famous/core/Surface');
    var Modifier             = require('famous/core/Modifier');
    var Transform            = require('famous/core/Transform');
    var View                 = require('famous/core/View');
    var ScrollView           = require('famous/views/Scrollview');
    var SequentialLayout     = require("famous/views/SequentialLayout");
    var Transitionable       = require('famous/transitions/Transitionable');
    var GenericSync          = require('famous/inputs/GenericSync');

    var ScrollViewExtension  = require('views/ScrollViewExtension');
    var RowView              = require('views/RowView');
    var ContainerSurface     = require("famous/surfaces/ContainerSurface");

    function AlbumView() {
        View.apply(this, arguments);

        this.bottomIconsDisplayed = true;
        this.touched = false; // keeps track of wether scroll view touched
        _createContent.call(this);
    }

    AlbumView.prototype = Object.create(View.prototype);
    AlbumView.prototype.constructor = AlbumView;

    AlbumView.prototype.render = function() {
        if (this.scrollView.getVelocity() &&
            !this.bottomIconsDisplayed && !this.touched){

            this.bottomIconsDisplayed = true;
            this._eventOutput('displayBottomIcons');
        }
        return this._node.render.apply(this._node, arguments);
    };

    AlbumView.DEFAULT_OPTIONS = {
        height: null,
        width: null,
        albumSize: null
    };

    function _createContent() {

    }


});

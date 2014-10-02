define(function(require, exports, module) {
    var Surface              = require('famous/core/Surface');
    var Modifier             = require('famous/core/Modifier');
    var Transform            = require('famous/core/Transform');
    var View                 = require('famous/core/View');
    var Utility              = require('famous/utilities/Utility');
    var SequentialLayout     = require("famous/views/SequentialLayout");

    var TitleBannerView      = require('views/TitleBannerView');
    var TabBannerView        = require('views/TabBannerView');
    var AlbumView            = require('views/AlbumView');
    var BottomIconsView      = require('views/BottomIconsView');

    function AppView() {
        View.apply(this, arguments);

        _createLayout.call(this);
        _createTitleBanner.call(this);
        _createTabBanner.call(this);
        _createAlbumView.call(this);
        _createBottomIcons.call(this);

        _handleEvents.call(this);
    }

    AppView.prototype = Object.create(View.prototype);
    AppView.prototype.constructor = AppView;

    var albumSize = window.innerWidth / 3;

    AppView.DEFAULT_OPTIONS = {
        height: window.innerHeight,
        width: window.innerWidth,
        albumSize: [albumSize, albumSize],
        bannerHeight: 50,
        bottomIconsHeight: 110
    };

    function _createLayout() {
        this.views = [];
        this.sequenialLayout = new SequentialLayout({
            direction: Utility.Direction.Y
        });

        this.sequenialLayout.sequenceFrom(this.views);
        this._add(this.sequenialLayout);
    }

    function _createTitleBanner() {

    }

    function _createTabBanner() {

    }

    function _createAlbumView() {

    }

    function _createBottomIcons() {

    }

    function _handleEvents() {

    }
});

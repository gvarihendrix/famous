/* globals define */
define(function(require, exports, module) {
    'use strict';
    // import dependencies
    var Engine = require('famous/core/Engine');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');
    var Easing = require('famous/transitions/Easing');

    // create the main context
    var mainContext = Engine.createContext();

    // your app here
    mainContext.setPerspective(1500);

    var lightBoxOptions = {
        inOpacity: 1,
        outOpacity: 1,
        inTransform: Transform.translate(320, 0,0),
        outTransform: Transform.translate(-320, 0, 0),
        inTransition: { duration: 400, curve: Easing.outBack },
        outTransition: { duration: 400, curve: Easing.inBack }
    };

    var logo = new ImageSurface({
        size: [200, 200],
        content: '/content/images/famous_logo.png',
        classes: ['backfaceVisibility']
    });

    function clickHandler(evt) {
        evt.preventDefault();
    }

    logo.on('click', clickHandler);

    var initialTime = Date.now() * 2;
    var centerSpinModifier = new Modifier({
        origin: [0.5, 0.5],
        transform : function() {
            return Transform.rotateY(0.0011 * (Date.now() - initialTime));
        }
    });
    mainContext.add(centerSpinModifier).add(logo);
});

var widget = $('.b-widget'),
    cube = $('.b-widget__cube'),
    _isMove = 0,
    _pointerStartPos = 0,
    _cubeAngle = 0,
    _stepAngle = 90,
    rotate = function(angle) {
        cube.css('pointer-events', 'none');
        cube.bind('webkitTransitionEnd', function() {
            cube.css('pointer-events', 'auto');
        });

        cube.css('-webkit-transform', 'translateZ(-150px) rotateY(' + (_cubeAngle += angle) + 'deg)');
        //cube.css('-moz-transform', 'translateZ(-150px) rotateY(' + (_cubeAngle += angle) + 'deg)');
        return false;
    };

widget.bind('touchstart', function(e) {
    _pointerStartPos = e.originalEvent.targetTouches[0].pageX;
});

widget.bind('touchmove', function(e) {
    _isMove = 1;
});

widget.bind('touchend', function(e) {
    //console.log(widget.width()/2 + ' - ' + _pointerStartPos );
    //console.log( _pointerStartPos > widget.width()/2 );
    if (!_isMove && e.target.tagName != 'A') {
        rotate(( _pointerStartPos > widget.width()/2 ) ? _stepAngle : -_stepAngle);
    } else _isMove = 0;
});

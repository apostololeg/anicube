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

widget.bind('click', function(e) {
    if (!_isMove && e.target.tagName != 'A') {
        rotate(( e.pageX > widget.width()/2 ) ? _stepAngle : -_stepAngle);
    }
});

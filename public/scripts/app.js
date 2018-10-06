'use strict';

console.log("hello");

var app = {
    title: 'heading',
    subtitle: 'subheading',
    option: []
};
function getLength() {
    if (app.option.length > 0) {
        return React.createElement(
            'p',
            null,
            ' here are your opption'
        );
    } else {
        return 'no option';
    }
}
var tempalate = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        'app.subtitle'
    ),
    getLength(),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'one'
        ),
        React.createElement(
            'li',
            null,
            'two'
        )
    )
);
var count = 0;
var addOne = function addOne() {
    count++;
    reRenderApp();
};
var minusOne = function minusOne() {
    count -= 1;
    reRenderApp();
};
var reset = function reset() {
    count = 0;
    reRenderApp();
};

var appRoot = document.getElementById('app');

var reRenderApp = function reRenderApp() {
    var tempalateTwo = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count:',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            'addOne'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            'minusOne'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(tempalateTwo, appRoot);
};
reRenderApp();

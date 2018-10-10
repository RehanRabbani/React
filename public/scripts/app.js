'use strict';

console.log("hello");

var app = {
    title: 'heading',
    subtitle: 'subheading',
    options: []
};
function getLength() {
    if (app.options.length > 0) {
        return React.createElement(
            'p',
            null,
            ' here are your opption'
        );
    } else {
        return 'no option';
    }
}
var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault(); //this prevent page to refresh
    var option = e.target.elements.option.value; //target input feild

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        reRender();
    }
};
var removeAll = function removeAll() {
    app.options = [];
    reRender();
};
var appRoot = document.getElementById('app');
var reRender = function reRender() {
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
            app.subtitle
        ),
        getLength(),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            ' Remove All '
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    option
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'ADD option'
            )
        )
    );
    ReactDOM.render(tempalate, appRoot);
};
reRender();

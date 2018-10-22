"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log('practise.js');
var contacts = [{
	imgURL: "ali.jpg",
	name: "Ali",
	phoneIcon: "<i class='fas fa-phone'></i>",
	number: "0300-1234567",
	envelop: "<i class='far fa-envelope'></i>",
	email: "ALi123@example.com",
	detail: 'seen',
	status: "Hey there! I am using WhatsApp. "
}, {
	imgURL: "ahmed.jpg",
	name: "ahmed",
	phoneIcon: "<i class='fas fa-phone'></i>",
	number: "0313-2239567",
	envelop: "<i class='far fa-envelope'></i>",
	email: "Ahmed234@example.com",
	detail: "seen",
	status: "Stay there to prove everyone wrong. "
}, {
	imgURL: "zeeshan.jpg",
	name: "Zeeshan",
	phoneIcon: "<i class='fas fa-phone'></i>",
	number: "0321-5236561",
	envelop: "<i class='far fa-envelope'></i>",
	email: "Zeeshan345@example.com",
	detail: "sent",
	status: "urgent calls only. "
}, {
	imgURL: "ahsan.jpg",
	name: "Ahsan",
	phoneIcon: "<i class='fas fa-phone'></i>",
	number: "0345-2224569",
	envelop: "<i class='far fa-envelope'></i>",
	email: "Ahsan456@example.com",
	detail: "seen",
	status: "busy "
}, {
	imgURL: "irfan.jpg",
	name: "Irfan",
	phoneIcon: "<i class='fas fa-phone'></i>",
	number: "0321-2951489",
	envelop: "<i class='far fa-envelope'></i>",
	email: "Irfan567@example.com",
	detail: "seen",
	status: "sleeping. "
}, {
	imgURL: "arman.jpg",
	name: "Arman",
	phoneIcon: "<i class='fas fa-phone'></i>",
	number: "033-6534564",
	envelop: "<i class='far fa-envelope'></i>",
	email: "Arman678@example.com",
	detail: "not sent",
	status: "new number. "
}, {
	imgURL: "hassan.jpg",
	name: "Hassan",
	phoneIcon: "<i class='fas fa-phone'></i>",
	number: "034-39814563",
	envelop: "<i class='far fa-envelope'></i>",
	email: "Hassan789@example.com",
	detail: "seen",
	status: "watching movie. "
}, {
	imgURL: "hassan.jpg",
	name: "Hassan",
	phoneIcon: "<i class='fas fa-phone'></i>",
	number: "034-39814563",
	envelop: "<i class='far fa-envelope'></i>",
	email: "Hassan789@example.com",
	detail: "seen",
	status: "watching movie. "
}, {
	imgURL: "hassan.jpg",
	name: "Hassan",
	phoneIcon: "<i class='fas fa-phone'></i>",
	number: "034-39814563",
	envelop: "<i class='far fa-envelope'></i>",
	email: "Hassan789@example.com",
	detail: "seen",
	status: "watching movie. "
}, {
	imgURL: "hassan.jpg",
	name: "Hassan",
	phoneIcon: "<i class='fas fa-phone'></i>",
	number: "034-39814563",
	envelop: "<i class='far fa-envelope'></i>",
	email: "Hassan789@example.com",
	detail: "seen",
	status: "watching movie. "
}, {
	imgURL: "hassan.jpg",
	name: "Hassan",
	phoneIcon: "<i class='fas fa-phone'></i>",
	number: "034-39814563",
	envelop: "<i class='far fa-envelope'></i>",
	email: "Hassan789@example.com",
	detail: "seen",
	status: "watching movie. "
}, {
	imgURL: "hassan.jpg",
	name: "Hassan",
	phoneIcon: "<i class='fas fa-phone'></i>",
	number: "034-39814563",
	envelop: "<i class='far fa-envelope'></i>",
	email: "Hassan789@example.com",
	detail: "seen",
	status: "watching movie. "
}, {
	imgURL: "hassan.jpg",
	name: "Hassan",
	phoneIcon: "<i class='fas fa-phone'></i>",
	number: "034-39814563",
	envelop: "<i class='far fa-envelope'></i>",
	email: "Hassan789@example.com",
	detail: "seen",
	status: "watching movie. "
}, {
	imgURL: "ghani.jpg",
	name: "Ghani",
	phoneIcon: "<i class='fas fa-phone'></i>",
	number: "0315-2444560",
	envelop: "<i class='far fa-envelope'></i>",
	email: "Ghani987@example.com",
	detail: "seen",
	status: "battery about to die. "
}];

var Parent = function (_React$Component) {
	_inherits(Parent, _React$Component);

	function Parent(props) {
		_classCallCheck(this, Parent);

		var _this = _possibleConstructorReturn(this, (Parent.__proto__ || Object.getPrototypeOf(Parent)).call(this, props));

		_this.additem = _this.additem.bind(_this);
		_this.state = {
			array: [],
			number: 0,
			guessNumber: 10
		};
		return _this;
	}

	_createClass(Parent, [{
		key: "additem",
		value: function additem(value) {

			if (value > this.state.guessNumber) return ' number is Too BIG ';else if (value < this.state.guessNumber) return ' Number Is TOo small';
			this.setState(function () {
				return {

					guessNumber: Math.floor(Math.random() * 10)

				};
				return 'Success';
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				React.createElement(AddOption, { className: "StyleOption",
					additem: this.additem,
					guessValue: this.state.guessNumber
				})
			);
		}
	}]);

	return Parent;
}(React.Component);

var AddOption = function (_React$Component2) {
	_inherits(AddOption, _React$Component2);

	function AddOption(props) {
		_classCallCheck(this, AddOption);

		var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

		_this2.additem = _this2.additem.bind(_this2);
		_this2.state = {
			error: undefined
		};
		return _this2;
	}

	_createClass(AddOption, [{
		key: "additem",
		value: function additem(e) {
			e.preventDefault();
			var value = e.target.elements.hafeez.value;
			var error = this.props.additem(value);
			this.setState(function () {
				return {
					error: error
				};
			});
		}
	}, {
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				null,
				this.state.error && React.createElement(
					"p",
					{ id: "one" },
					this.state.error
				),
				React.createElement(
					"form",
					{ onSubmit: this.additem },
					React.createElement("input", { type: "number", name: "hafeez" }),
					React.createElement(
						"button",
						null,
						"submit "
					),
					console.log(this.props.guessValue)
				)
			);
		}
	}]);

	return AddOption;
}(React.Component);

ReactDOM.render(React.createElement(Parent, null), document.getElementById('app'));

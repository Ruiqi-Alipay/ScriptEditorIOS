var Dashboard = require('../dashboard');
var Register = require('../register');
var {
	AlertIOS
} = require('react-native');

var _navigator;

module.exports = {
	init: function (navigator) {
		_navigator = navigator;
	},
	dashboard: {
		title: 'Dashboard',
		component: Dashboard,
		leftButtonTitle: ' ',
		rightButtonTitle: 'Signout',
		onRightButtonPress: () => {
			AlertIOS.alert('Sign out', 'Are you sure you want sign out with this account?', [
				{text: 'Cancel'},
				{text: 'Ok', onPress: () => _navigator.popToTop()}
			]);
		}
	},
	register: {
		title: 'Register',
		component: Register
	}
}
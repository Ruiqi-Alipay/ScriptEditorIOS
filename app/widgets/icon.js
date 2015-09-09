var React = require('react-native');
var { Icon } = require('react-native-icons');
var { StyleSheet } = React;

var styles = StyleSheet.create({
	small: {
		height: 20,
		width: 20
	},
	mid: {
		height: 25,
		width: 25
	},
	large: {
		height: 30,
		width: 30
	}
});

module.exports = React.createClass({
	propTypes: {
		icon: React.PropTypes.string.isRequired,
		size: React.PropTypes.string.isRequired,
		color: React.PropTypes.string
	},
	render: function () {
		var size;
		switch (this.props.size) {
			case 'small': size = 16; break;
			case 'mid': size = 26; break;
			case 'large': size = 34; break;
		}

		return (
			<Icon name={'ion|' + this.props.icon} size={size}
				color={this.props.color} style={styles[this.props.size]}/>
		);
	}
});
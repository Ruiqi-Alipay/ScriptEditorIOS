var React = require('react-native');
var Icon = require('./icon');
var {
	StyleSheet,
	TouchableHighlight,
	View
} = React;

var styles = StyleSheet.create({
	small: {
		height: 30,
		width: 30,
		borderRadius: 15
	},
	mid: {
		height: 36,
		width: 36,
		borderRadius: 18
	},
	large: {
		height: 40,
		width: 40,
		borderRadius: 20
	},
	center: {
		justifyContent: 'center',
		alignItems: 'center'
	}
});

module.exports = React.createClass({
	propTypes: {
		icon: React.PropTypes.string.isRequired,
		size: React.PropTypes.string.isRequired,
		onPress: React.PropTypes.func.isRequired,
		color: React.PropTypes.string
	},
	render: function () {
		return (
			<View onPress={this.props.onPress}
				underlayColor='#FF9933' style={[styles[this.props.size], styles.center]}>
				<Icon icon={this.props.icon} size={this.props.size} color={this.props.color}/>
			</View>
		);
	}
});
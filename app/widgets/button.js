var React = require('react-native');
var {
	TouchableHighlight,
	ActivityIndicatorIOS,
	StyleSheet,
	Text,
	View
} = React;

var styles = StyleSheet.create({
	button: {
		borderRadius: 3,
		height: 40,
		padding: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFB266',
		shadowColor: "#808080",
		shadowOpacity: 0.8,
		shadowRadius: 2,
		shadowOffset: {
			height: 1,
			width: 0
		}
	}
});

module.exports = React.createClass({
	propTypes: {
		label: React.PropTypes.string.isRequired
	},
	render: function () {
		if (this.props.active) {
			return (
				<View style={[this.props.style, styles.button]}>
					<ActivityIndicatorIOS color='white' size='small'/>
				</View>
			);
		} else {
			return (
				<TouchableHighlight onPress={this.props.onPress}
					underlayColor="#FF9933" style={[this.props.style, styles.button]}>
					<Text>{this.props.label}</Text>
				</TouchableHighlight>
			);
		}
	}
});
var React = require('react-native');
var { Icon } = require('react-native-icons');
var {
	TouchableHighlight,
	ActivityIndicatorIOS,
	StyleSheet,
	Text,
	View
} = React;

var styles = StyleSheet.create({
	button: {
		borderRadius: 25,
		width: 50,
		height: 50,
		padding: 4,
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
	},
	icon: {
		height: 35,
		width: 35
	}
});

module.exports = React.createClass({
	render: function () {
		return (
			<TouchableHighlight onPress={this.props.onPress}
				underlayColor="#FF9933" style={[this.props.style, styles.button]}>
				<Icon name={'ion|' + this.props.icon} size={25} color='white' style={styles.icon}/>
			</TouchableHighlight>
		);
	}
});
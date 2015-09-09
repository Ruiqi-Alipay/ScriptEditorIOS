var React = require('react-native');
var {
	StyleSheet,
	View,
	Text
} = React;

var styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		backgroundColor: 'red'
	}
});

module.exports = React.createClass({
	render: function () {
		console.log('package-page');
		return (
			<View style={styles.container}>
				<Text>1</Text>
			</View>
		);
	}
});
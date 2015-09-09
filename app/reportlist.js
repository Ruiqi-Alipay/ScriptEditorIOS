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
		backgroundColor: 'green'
	}
});

module.exports = React.createClass({
	render: function () {
		console.log('report-page');
		return (
			<View style={styles.container}>
				<Text>1</Text>
			</View>
		);
	}
});
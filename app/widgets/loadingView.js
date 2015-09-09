var React = require('react-native');
var {
	StyleSheet,
	ActivityIndicatorIOS,
	View
} = React;

var styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

module.exports = React.createClass({
	render: function () {
		return (
			<View style={styles.container}>
				<ActivityIndicatorIOS size='large' color='gray'/>
			</View>
		);
	}
});
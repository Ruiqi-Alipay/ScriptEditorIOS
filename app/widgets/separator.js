var React = require('react-native');
var {
	StyleSheet,
	View
} = React;

var styles = StyleSheet.create({
	separator: {
		height: 1,
		backgroundColor: '#F5F5F5',
		marginHorizontal: 10
	}
})

module.exports = React.createClass({
	render: function () {
		return <View style={styles.separator}/>
	}
});
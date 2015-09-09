var React = require('react-native');
var {
	StyleSheet,
	Modal,
	View,
	Text
} = React;

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 20,
		backgroundColor: 'rgba(0, 0, 0, 0.5)'
	},
	dialog: {
		borderRadius: 10,
		backgroundColor: '#fff',
		padding: 20
	}
});

module.exports = React.createClass({
	propTyles: {
		show: React.PropTypes.bool.isRequired
	},
	render: function () {
		return (
			<Modal animated='true' transparent='true' visible='true'>
				<View style={styles.container}>
					<View style={styles.dialog}>
						<Text>This modal was presented animation.</Text>
					</View>
				</View>
			</Modal>
		);
	}
});
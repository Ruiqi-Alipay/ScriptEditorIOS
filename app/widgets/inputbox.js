var React = require('react-native');
var Icon = require('./icon');
var {
	StyleSheet,
	TextInput,
	View
} = React;

var styles = StyleSheet.create({
	inputBox: {
		flex: 1,
		height: 35,
		alignSelf: 'center'
	},
	bottomLine: {
		backgroundColor: '#FFB266',
		height: 2
	},
	inputContent: {
		flexDirection: 'row',
		alignItems: 'center'
	}
});

module.exports = React.createClass({
	render: function () {
		return (
			<View {...this.props}>
				<View style={styles.inputContent}>
					<Icon icon={this.props.icon} size='mid' color='gray'/>
					<TextInput onChangeText={this.props.onChangeText}
						style={styles.inputBox} placeholder={this.props.placeholder}/>
				</View>
				<View style={styles.bottomLine}/>
			</View>
		);
	}
});
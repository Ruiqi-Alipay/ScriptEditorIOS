var React = require('react-native');
var {Http} = require('./utils');
var {
	Button,
	InputBox
} = require('./widgets');
var {
	StyleSheet,
	View,
	Text
} = React;

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginHorizontal: 40
	},
	gap: {
		marginBottom: 10
	},
	errorText: {
		color: 'red'
	}
});

module.exports = React.createClass({
	getInitialState: function () {
		return {
			username: null,
			password: null,
			repeatPassword: null,
			submiting: false
		}
	},
	_onSubmitClicked: function () {
		this.setState({
			submiting: true
		});

		http('/user', 'POST', {
			username: this.state.username,
			password: this.state.password
		}, null, (err, data) => {
			if (!err) {
				this.props.navigator.pop();
			}

			this.setState({submiting: false, error: err});
		});
	},
	render: function () {
		return (
			<View style={styles.container}>
				<InputBox
					onChangeText={text => this.setState({username: text})}
					style={styles.gap}
					placeholder='username'/>
				<InputBox
					onChangeText={text => this.setState({password: text})}
					style={styles.gap}
					placeholder='password'
					secureTextEntry='true'/>
				<InputBox
					onChangeText={text => this.setState({repeatPassword: text})}
					style={styles.gap}
					placeholder='repeat password'
					secureTextEntry='true'/>
				<Text style={[styles.errorText, styles.gap]}>{this.state.error}</Text>
				<Button label='Submit' style={styles.gap} onPress={this._onSubmitClicked} active={this.state.submiting}/>
			</View>
		);
	}
});
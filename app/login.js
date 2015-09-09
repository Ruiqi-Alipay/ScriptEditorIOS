var React = require('react-native');
var {
	Http,
	router
} = require('./utils');
var {
	Button,
	InputBox
} = require('./widgets');
var {
	StyleSheet,
	Text,
	View,
	Modal,
	AlertIOS
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
			username: 'ruiqi',
			password: '1111'
		}
	},
	componentDidMount: function () {
		router.init(this.props.navigator);
	},
	_onLoginClicked: function () {
		this.setState({
			loading: true
		});

		Http('/user/signin', 'post', {
			username: this.state.username,
			password: this.state.password
		}, null, (err, data) => {
			if (!err) {
				this.props.navigator.push(Object.assign(router.dashboard, {passProps: data}));
			}

			this.setState({loading: false, error: err});
		});
	},
	_onSignupClicked: function () {
		this.props.navigator.push(router.register);
	},
	render: function () {
		return (
			<View style={styles.container}>
				<InputBox
					icon='person'
					onChangeText={text => this.setState({username: text})}
					style={styles.gap}
					placeholder='username'/>
				<InputBox
					icon='key'
					onChangeText={text => this.setState({password: text})}
					style={styles.gap}
					placeholder='password'
					secureTextEntry='true'/>
				<Text style={[styles.errorText, styles.gap]}>{this.state.error}</Text>
				<Button label='Login' style={styles.gap} onPress={this._onLoginClicked} active={this.state.loading}/>
				<Button label='Sign Up' style={styles.gap} onPress={this._onSignupClicked}/>
			</View>
		);
	}
});
'use strict';

var React = require('react-native');
var LoginPage = require('./app/login');
var {
  NavigatorIOS,
  AppRegistry,
  StyleSheet
} = React;

var styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

class Project extends React.Component {
	render() {
		return (
			<NavigatorIOS
				style={styles.container}
				barTintColor='#FFB266'
				tintColor='black'
				initialRoute={{
					component: LoginPage,
					title: 'Login'
				}}/>
		);
	}
}

AppRegistry.registerComponent('OMDbProject', () => Project);



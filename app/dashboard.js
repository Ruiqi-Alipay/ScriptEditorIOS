'use strict';
var React = require('react-native');
var FolderList = require('./folderlist');
var ParameterList = require('./parameterlist');
var PackageList = require('./packagelist');
var ReportList = require('./reportlist');
var {Navbar} = require('./widgets');
var {
	Navigator,
	TabBarIOS,
	StyleSheet,
	Text,
	View
} = React;

var styles = StyleSheet.create({
	container: {
		flex: 1
	},
	navTabs: {
		height: 50
	}
});

var BottomNavbar = React.createClass({
	propTypes: {
		onSelected: React.PropTypes.func.isRequired,
		selected: React.PropTypes.object.isRequired,
		routes: React.PropTypes.array.isRequired
	},
	getInitialState: function () {
		return {
			selected: this.props.selected
		};
	},
	_onTabSelected: function (route) {
		this.setState({selected: route});
		this.props.onSelected(route);
	},
	render: function () {
		var tabViews = this.props.routes.map(route => {
			return (
				<TabBarIOS.Item
					key={route.label}
					title={route.label}
					icon='ion|plus'
					selected={this.state.selected.label == route.label}
					onPress={this._onTabSelected.bind(this, route)}>
					<View/>
				</TabBarIOS.Item>
			);
		}.bind(this));

		return (
			<View style={styles.navTabs}>
				<TabBarIOS
					tintColor='white'
					barTintColor='#FFB266'>
					{tabViews}
				</TabBarIOS>
			</View>
		);
	}
});

module.exports = React.createClass({
	getDefaultProps: function () {
		var tabs = [
			{label: 'folder', icon: 'folder'},
			{label: 'parameter', icon: 'social-vimeo'},
			{label: 'package', icon: 'social-dropbox'},
			{label: 'report', icon: 'clipboard'}
		];

		return {
			defaultTab: tabs[0],
			tabs: tabs
		};
	},
	renderScene: function (tab, navigator) {
		switch(tab.label) {
			case 'folder':
				return <FolderList username={this.props.username}
							sessionId={this.props.sessionId}/>;
			case 'parameter':
				return <ParameterList username={this.props.username}
							sessionId={this.props.sessionId}/>;
			case 'package':
				return <PackageList username={this.props.username}
							sessionId={this.props.sessionId}/>;
			case 'report':
				return <ReportList username={this.props.username}
							sessionId={this.props.sessionId}/>;
		}
	},
	render: function () {
		return (
			<Navigator
				ref={(navigator) => {this._navigator = navigator;}}
				style={styles.container}
				initialRoute={this.props.defaultTab}
				initialRouteStack={this.props.tabs}
				renderScene={this.renderScene}
				configureScene={() => ({...Navigator.SceneConfigs.HorizontalSwipeJump})}
				navigationBar={
					<Navbar tabs={this.props.tabs} defaultTab={this.props.defaultTab}
						onSelected={tab => this._navigator.jumpTo(tab)}/>
				}/>
		);
	}
})
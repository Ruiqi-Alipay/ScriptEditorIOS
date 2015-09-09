var React = require('react-native');
var Icon = require('./icon');
var {
	TouchableHighlight,
	StyleSheet,
	Text,
	View
} = React;

var styles = StyleSheet.create({
	container: {
		backgroundColor: '#FFB266',
		flexDirection: 'row',
		height: 50,
		shadowColor: "#808080",
		shadowOpacity: 0.8,
		shadowRadius: 2,
		shadowOffset: {
			height: 1,
			width: 0
		}
	},
	tabItem: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},
	label: {
		color: 'gray',
		fontSize: 12
	},
	labelSelected: {
		color: 'white',
		fontSize: 12
	}
});

module.exports = React.createClass({
	propTypes: {
		tabs: React.PropTypes.array.isRequired,
		onSelected: React.PropTypes.func.isRequired,
		defaultTab: React.PropTypes.object,
	},
	getInitialState: function () {
		return {
			selectTab: this.props.defaultTab ? this.props.defaultTab : this.props.tabs[0]
		};
	},
	_onTabSelected: function (tab) {
		this.setState({selectTab: tab});
		this.props.onSelected(tab);
	},
	render: function () {
		var itemViews = this.props.tabs.map((tab, index) => {
			var selected = (tab == this.state.selectTab);

			return (
				<TouchableHighlight key={index} style={styles.tabItem}
					underlayColor="#FF9933" onPress={this._onTabSelected.bind(this, tab)}>
					<View style={styles.tabItem}>
						<Icon icon={tab.icon} size='mid' color={selected ? 'white' : 'gray'}/>
						<Text style={selected ? styles.labelSelected : styles.label}>{tab.label}</Text>
					</View>
				</TouchableHighlight>
			);
		});

		return (
			<View style={styles.container}>
				{itemViews}
			</View>
		);
	}
});
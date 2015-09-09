var React = require('react-native');
var http = require('./utils/http');
var {LoadingView} = require('./widgets');
var {
	StyleSheet,
	ListView,
	View,
	Text
} = React;

var styles = StyleSheet.create({

});

module.exports = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		sessionId: React.PropTypes.string.isRequired
	},
	getInitialState: function () {
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return {
			newkey: null,
			newValue: null,
			dataSource: ds.cloneWithRows([])
		};
	},
	componentDidMount: function () {
		http('/parameter', 'get', null, {
			username: this.state.username,
			sessionId: this.state.sessionId
		}, (err, data) => {
			this.setState({
				parameters: data,
				dataSource: this.state.dataSource.cloneWithRows(data)
			});
		});
	},
	_renderRows: function (rowData, sectionID, rowID, highlightRow) {
		// body...
	},
	_renderHeader: function () {

	},
	_renderSeparator: function (sectionID, rowID, adjacentRowHighlighted) {
		// body...
	},
	render: function () {
		if (this.state.parameters) {
			return (
				<ListView
					dataSource={this.state.dataSource}
					renderRows={this._renderRows}
					renderHeader={this._renderHeader}
					renderSeparator={this._renderSeparator}/>
			);
		} else {
			return <LoadingView/>;
		}
	}
});
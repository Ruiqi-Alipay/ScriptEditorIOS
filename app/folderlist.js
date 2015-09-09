var React = require('react-native');
var Http = require('./utils/http');
var {
	Button,
	LoadingView,
	Separator,
	InputBox,
	Fab,
	Icon,
	IconBtn,
	Dialog
} = require('./widgets');
var {
	StyleSheet,
	View,
	Text,
	ListView,
	TouchableHighlight
} = React;

var styles = StyleSheet.create({
	headerBar: {
		flexDirection: 'row',
		padding: 10
	},
	newFolderButton: {
		marginLeft: 10,
		paddingHorizontal: 10
	},
	row: {
		flexDirection: 'row',
		alignItems: 'center',
    	padding: 14
	},
	rowText: {
		flex: 1,
		marginLeft: 8
	},
	headerInput: {
		flex: 1
	},
	container: {
		flex: 1,
		position: 'relative'
	},
	cornerBtn: {
		position: 'absolute',
		right: 10,
		bottom: 10
	}
});

module.exports = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		sessionId: React.PropTypes.string.isRequired
	},
	getInitialState: function () {
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1.title != r2.title});

		return {
			newTitle: null,
			dataSource: ds.cloneWithRows([])
		};
	},
	componentDidMount: function () {
		console.log('componentDidMount');
		console.log(Http);
		Http('/folder', 'get', null, {
			username: this.props.username,
			sessionId: this.props.sessionId
		}, (err, data) => {
			this.setState({
				folders: data,
				dataSource: this.state.dataSource.cloneWithRows(data)
			});
		});
	},
	_onNewFolder: function () {
		http('/folder', 'post', {
			title: this.state.newTitle
		}, {
			username: this.props.username,
			sessionId: this.props.sessionId
		}, (err, data) => {
			var folders;
			if (this.state.folders) {
				this.state.folders.push(data);
				folders = this.state.folders;
			} else {
				folders = [data];
			}

			this.setState({
				folders: folders,
				dataSource: this.state.dataSource.cloneWithRows(folders)
			});
		});
	},
	_onRowEdit: function () {
		// body...
	},
	_onRowDeleted: function () {
		// body...
	},
	_renderRow: function (rowData, sectionID, rowID, highlightRow) {
		return (
			<TouchableHighlight underlayColor="#FFEBCD">
				<View style={styles.row}>
					<Icon icon='folder' size='large'/>
					<Text style={styles.rowText}>{rowData.title}</Text>
					<IconBtn icon='edit' size='small' onPress={this._onRowEdit} color='gray'/>
					<IconBtn icon='close' size='small' onPress={this._onRowDeleted} color='gray'/>
				</View>
			</TouchableHighlight>
		);
	},
	_renderHeader: function () {
		// return (
		// 	<View style={styles.headerBar}>
		// 		<InputBox
		// 			onChangeText={text => this.setState({newTitle: text})}
		// 			placeholder='new folder' style={styles.headerInput}/>
		// 		<Button label='New Folder' style={styles.newFolderButton}
		// 			onPress={this._onNewFolder}></Button>
		// 	</View>
		// );
	},
	_onAddClicked: function () {
		this.setState({
			showDialog: true
		});
	},
	render: function () {
		if (this.state.folders) {
			return (
				<View>
					<Dialog show={this.state.showDialog}/>
					<View style={styles.container}>
						<ListView
							dataSource={this.state.dataSource}
							renderRow={this._renderRow}
							renderSeparator={() => <Separator/>}/>
						<Fab style={styles.cornerBtn} icon='plus'
							onPress={this._onAddClicked}/>
					</View>
				</View>
			);
		} else {
			return (<LoadingView/>);
		}
	}
});
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import Avatar from 'material-ui/Avatar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
class App extends Component {
  constructor(){
    super();
    this.state={
      'you':[],
      'me':[],
    }
  }
  
  render() {
    return (
      <div>
      <MuiThemeProvider>
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
      </MuiThemeProvider>
      <div style={{position:"absolute",bottom:'75px'}}>
      <MuiThemeProvider>
    <List>
      <ListItem
        disabled={true}
              leftAvatar={<Avatar src={logo} />}>Image Avatar
    </ListItem>
    </List>
    </MuiThemeProvider>
    </div>
      <div>
      <MuiThemeProvider>
          <TextField style={{position:"absolute",bottom: '20px',width:'1000px'}} hintText="Hint Text" />
      </MuiThemeProvider>
      <MuiThemeProvider>
          <RaisedButton label="Send" primary={true} style={{margin:12,position:"absolute",bottom: '20px',left:'1000px'}} />
      </MuiThemeProvider>
      </div>
      </div>
    );
  }
}

export default App;

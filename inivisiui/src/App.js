import $ from 'jquery';
import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import History from "./Hisotry.js";
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class App extends Component {
  constructor() {
    super();
    this.state = {
      messages: []
    };
  }
  componentDidMount(){
      $.getJSON(`http://localhost:3001/api/v1/chatmsgs.json`,(response)=>{this.setState({messages:response})});
      console.log(this.state.messages);
  }
  onPressKey(e){
    if(e.key==='Enter')
      this.onSend();  
  }
  itemAdded(){
    $.getJSON(`http://localhost:3001/api/v1/chatmsgs.json`,(response)=>{this.setState({messages:response})});
  }
  onSend(){
    // console.log(this.refs.textBox);
    var msgs= this.state.messages;
    var text=this.refs.textBox.getValue();
    $.ajax({
      url:`http://localhost:3001/api/v1/chatmsgs.json`,
      type:'POST',
      data:{messageui:{username:'Eminem',message:text}}, 
      success:this.itemAdded()
    });
    this.refs.textBox.input.value='';
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
        <div>
          <AppBar
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"  />
        <div style={{ position: "absolute", bottom: "75px" }}>
               <History messages={this.state.messages} />
        </div>
        <div>
        <TextField ref='textBox' onKeyDown={(e)=>{this.onPressKey(e);}}
              style={{ position: "absolute", bottom: "20px", width: "1000px" }}
              hintText="Type Something"    />
            <RaisedButton
              label="Send"
              primary={true}
              onTouchTap={()=>{this.onSend();}}
              style={{
                margin: 12,
                position: "absolute",
                bottom: "20px",
                left: "1000px"
              }}/>
        </div>
        </div>
      </MuiThemeProvider>
    </div>
    );
  }
}
export default App;
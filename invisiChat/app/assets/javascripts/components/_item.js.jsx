var Item = React.createClass({

  getInitialState(){
    return {
      name:[],
      text:[],
      editable:false
    }
  },
  handleEdit(){
    if(this.state.editable){

  }
    this.setState({
      editable:!this.state.editable
    });
  },
  updateName(e){
      this.setState({
        name:e.target.value
        });
    },
    updateText(e){
      this.setState({
        text:e.target.value
        });
      console.log(this.state);
    },
  render(){
    var delHandle= this.props.delHandle;
    var inputField= this.state.editable?<div><input value={this.props.name} onChange={this.updateName} name='name' /></div>:<div>{this.props.name}</div>;
    var textField= this.state.editable?<div><input value={this.props.description} onChange={this.updateText} name='value' /></div>:<div>{this.props.description}</div>;
    var edit = this.state.editable? <p>Submit</p>:<p>Edit</p>;
    var remove = this.state.editable? null:<button onClick={()=>{this.props.delHandle(item.id);}}>Remove</button>;
    return(<div key={this.props.id}>
        {inputField}
        {textField}
        <div>{remove}
        <button onClick={this.handleEdit}>{edit}</button>
        </div>
        </div>
        );
  }
});
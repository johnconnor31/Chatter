var Item = React.createClass({

  getInitialState(){
    return {
      id:this.props.id,
      name:this.props.name,
      text:this.props.description,
      editable:false
    }
  },
  handleEdit(){
    if(this.state.editable){
      var item={
        id:this.state.id,
        name:this.state.name,
        description:this.state.text,
      }
      this.props.editHandler(item);
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
      // console.log(this.state);
    },
  render(){
    var delHandle= this.props.delHandle;
    var inputField= this.state.editable?<div><input value={this.state.name} onChange={(e)=>{this.updateName(e);}} /></div>:<div>{this.props.name}</div>;
    var textField= this.state.editable?<div><input value={this.state.text} onChange={(e)=>{this.updateText(e);}} /></div>:<div>{this.props.description}</div>;
    var edit = this.state.editable? <p>Submit</p>:<p>Edit</p>;
    var remove = this.state.editable? null:<button onClick={()=>{this.props.delHandler(this.props.id);}}>Remove</button>;
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
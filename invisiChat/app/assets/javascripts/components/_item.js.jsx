var Item = React.createClass({
  getInitialState(){
    return {
      name:[],
      description:[],
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
  render(){
    var delHandle= this.props.delHandle;
    var inputField= this.state.editable?<div><input value={this.props.name} name='name' /></div>:<div>{this.props.name}</div>;
    var textField= this.state.editable?<div><input value={this.props.description} name='value' /></div>:<div>{this.props.description}</div>
    var button = this.state.editable? <p>Submit</p>:<p>Edit</p>;
    return(<div key={this.props.id}>
        {inputField}
        {textField}
        <div><button onClick={()=>{this.props.delHandle(item.id);}}>Remove</button>
        <button onClick={this.handleEdit}>{button}</button>
        </div>
        </div>);
  }
});
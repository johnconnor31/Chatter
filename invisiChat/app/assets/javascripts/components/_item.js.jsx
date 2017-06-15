var Item = React.createClass({
	onInitialize(){
		this.state={
			editMode:false,
			name:null,
			description:null,
		}	
	}
	onEdit(){
		if(this.state.editMode){

		}
		this.state={
			editMode:!this.state.editMode
		}
	}

  render(){
  	var nameField= this.state.editable? <input name='name' value={this.props.name}/>:{this.props.name};
  	var textField= this.state.editable?<input name='description' value={this.props.description}/>:{this.props.description};
    return(<div key={this.props.id}>
    	<div>{nameField}</div>
    	<div>{textField}</div>
        <div><button onClick={()=>{this.props.delHandler(item.id);}}>Remove</button>
        <button onClick={()=>{this.props.editHandler(item.id);}}>Edit</button>
        </div>
        </div>);
  }
});
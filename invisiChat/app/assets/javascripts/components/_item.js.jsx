var Item = React.createClass({
  render(){
    return(<div key={this.props.id}>
        <div>{this.props.name}</div>
        <div>{this.props.description}<button onClick={()=>{this.props.delHandler(item.id);}}>Remove</button>
        <button onClick={()=>{this.props.editHandler(item.id);}}>Edit</button>
        </div>
        </div>);
  }
});
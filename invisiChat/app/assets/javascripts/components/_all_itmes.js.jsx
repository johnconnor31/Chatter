var AllItems= React.createClass({
  render(){
    var delHandler= this.props.deleteHandle;
    var items= this.props.items.map(function(item){
      return (
        
      );
    });

    return (
      <div>
        {items}
      </div>
      );
    }
  });
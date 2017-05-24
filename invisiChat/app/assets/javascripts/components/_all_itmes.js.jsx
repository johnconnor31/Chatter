var AllItems= React.createClass({
  render(){
    var items= this.props.items.map(function(item){
      return (
        <div key={item.id}>
        <div>{item.name}</div>
        <div>{item.description}</div>
        </div>
      );
    });

    return (
      <div>
        {items}
      </div>
      );
    }
  });
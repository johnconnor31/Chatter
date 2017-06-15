var AllItems= React.createClass({
  render(){
    var delHandler= this.props.deleteHandle;
    var editHandler= this.props.editHandle;
    var items= this.props.items.map(function(item){
      return (<Item id={item.id} name={item.name} description={item.description}

                delHandler={delHandler} editHandler={editHandler}/>
          );
      });
      
    return (
      <div>
        {items}
      </div>
      );
    }
  });
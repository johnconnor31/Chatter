var NewItem = React.createClass({
  addItem(){
    console.log('add item clicked');
    var name= this.refs.name.value;
    var description=this.refs.description.value;
    $.ajax({url:'api/v1/items',
      type:'POST',
      data:{item:{name: name, description: description}},
      success:
        (item)=>{this.props.submit(item);
      }
  });
},
  render(){
   return ( 
    <div>
      <div><input ref='name' placeholder='name'/></div>
      <div><input ref='description' placeholder='description'/></div>
      <div><button name='submit' onClick='{this.addItem}'>Add to List</button></div>
    </div>
    );

  }
});
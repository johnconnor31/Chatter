class NewItem extends React.Component{
  addItem(){
    $.ajax(url:'api/v1/items',
      type:'POST',
      data:{item:{name:this.refs.name.value,description:this.refs.description.value}},
      success:(item)=>{
        this.props.submit(item);
    }
      );
  }
  render(){
   return ( 
    <div>
      <div>Name:<input name='text'  ref='name'/></div>
      <div>Description:<textarea ref='description'/></div>
      <div><button name='submit'>Add to List</button></div>
    </div>
    );

  }
}
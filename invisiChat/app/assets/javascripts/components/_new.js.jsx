var NewItem = React.createClass({
    onInitialize(){
      this.state={
        name:'',
        text:'',
      }
    }
  ,
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
  addItem(){
    console.log('add item clicked');
    var name= this.state.name;
    var description=this.state.text;
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
      <div><input placeholder='name' name='name' onChange={(e)=>{this.updateName(e);}}/></div>
      <div><input placeholder='description' name='description' onChange={(e)=>{this.updateText(e);}}/></div>
      <div><button name='submit' onClick={()=>{this.addItem();}}>Add to List</button></div>
    </div>
    );
  }
});
var Body=React.createClass({
  getInitialState(){
    return ({
      items:[]
    });
  },

  componentDidMount(){
    console.log('body mounted');
    $.getJSON('api/v1/items.json',(response)=>{this.setState({items:response})});
  },
  handleNew(item){
    console.log('this is :'+this);
    var tmpItems= this.state.items;
    tmpItems.push(item);
    this.setState({items:tmpItems});
  },
  itemDeleted(id){
    var result = this.state.items.filter((item)=>{
      return item.id!=id;
    });
    this.setState({items:result});
  },
  handleDelete(id){
    console.log(id);
    $.ajax({
      url:`api/v1/items/${id}`,
      type:'DELETE',
      success:this.itemDeleted(id)
    });
  },
  itemEdited(itemUp){
    var result = this.state.items.map((item)=>{
      if(item.id==itemUp.id)
            return itemUp;
      else
            return item;
    });
    this.setState({items:result});
  },
  handleEdit(itemUp){
    console.log(itemUp);
    var name= itemUp.name;
    var text=itemUp.description;
    var id=itemUp.id;
    $.ajax({
      url:`api/v1/items/${itemUp.id}`,
      type:'PUT',
      data:{item:{id:id,name:name,description:text}},
      success:this.itemEdited(itemUp)
    });
  },
  render(){
      return (
      <div>
        <AllItems items={this.state.items} deleteHandle={this.handleDelete} editHandle={this.handleEdit} />
        <NewItem submit={this.handleNew} />
      </div>
    );
}

})
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
  handleSubmit(item){
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
  render(){
      return (
      <div>
        <AllItems items={this.state.items} deleteHandle={this.handleDelete} />
        <NewItem submit={this.handleSubmit}/>
      </div>
    );
}

})
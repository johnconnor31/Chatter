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
  render(){
      return (
      <div>
        <AllItems items={this.state.items} />
        <NewItem submit={this.handleSubmit}/>
      </div>
    );
}

})
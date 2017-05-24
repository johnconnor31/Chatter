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
    var tmpItems= this.state.items;
    tmpItems.push(item);
    this.setState({items:tmpItems});
  }
  render(){
    this.submitHandle=handleSubmit.bind(this);
      return (
      <div>
        <NewItem submit={this.submitHandle}/>
        <AllItems Items={this.state.items} />
      </div>
    );
}

})
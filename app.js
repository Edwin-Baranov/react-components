class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      have: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      have: !this.state.have
    });
  }

  onHoverState() {
    this.setState({
      hover: true
    });
  }

  offHoverState() {
    this.setState({
      hover: false
    });
  }

  render() {
    var style = {
      textDecoration: this.state.have ? 'line-through' : 'none',
      fontWeight: this.state.hover ? 'bold' : 'normal'
    };

    return (<li style = {style} onClick={this.onListItemClick.bind(this)} onMouseEnter={this.onHoverState.bind(this)} onMouseLeave={(this.offHoverState.bind(this))}>{this.props.item}</li>);
  }
}


var GroceryList = (props) => (
  <>
    <h2>Grocery List</h2>
    <ul>
      {props.groceries.map(grocery => <GroceryListItem item = {grocery}/>)}
    </ul>
  </>
)

var App = () => (
    <GroceryList groceries={['Cucumbers', 'Kale']}/>
);

ReactDOM.render(<App/>, document.getElementById("app"));
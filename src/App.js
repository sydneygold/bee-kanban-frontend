import './App.css';
import { Component } from 'react/cjs/react.production.min';
import BoardContainer from './components/BoardContainer'

const listItemUrl = 'http://localhost:3000/list_items'
const boardUrl = 'http://localhost:3000/boards'

export default class App extends Component {

  state = {
    boards: [],
    listItems: []
  }

  componentDidMount(){
    this.getBoards()
    this.getListItems()
  }

  getBoards = () => {
    fetch(boardUrl)
      .then(response => response.json())
      .then(results => this.setState({boards: results}))
  }

  getListItems = () => {
    fetch(listItemUrl)
      .then(response => response.json())
      .then(results => this.setState({listItems: results}))
  }
  

  render(){
    return (
      <div className="App">
      <header className="title-banner">
        <h1>Bee Kanban</h1>
      </header>
      <section className="board-box">
        <BoardContainer 
          boards={this.state.boards} 
          listItems={this.state.listItems}
        />
      </section>
      </div>
    );
  }
}


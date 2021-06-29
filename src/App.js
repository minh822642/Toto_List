import TodoItem from './component/TodoItem'
import TodoData from './component/TodoData'
import Conditional from './component/Conditional'
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: TodoData,
      count: 0,
      isLoading: true,
      isLog: false,
      checkLog: false,
      firstName: "",
      lastName: "",
      isChecked: false,
      gender: "",
      color: "",

    }
    this.increaseClick = this.increaseClick.bind(this)
    this.decreaseClick = this.decreaseClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleChange1 = this.handleChange1.bind(this)
  }

  increaseClick() {
    this.setState({
      count: this.state.count + 1
    }
    )
  }
  decreaseClick() {
    this.setState({
      count: this.state.count - 1
    }
    )
  }

  handleChange(id) {
    this.setState(prevState => {
      const updatedTodo = prevState.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed

        }
        return todo
      })
      return {
        todos: updatedTodo
      }
    })
    console.log(this.state.todos.completed);

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1000)
  }

  handleClick() {
    this.setState(prevState => {
      return {
        isLog: !prevState.isLog,
        checkLog: !prevState.checkLog
      }
    })

  }

  handleChange1(event) {
    const { name, value, checked, type } = event.target
    type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
  }




  render() {
    const TodoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} />)
    let buttonText = this.state.isLog === true ? "LOG OUT" : "LOG IN"
    let logCheck = this.state.checkLog ? "You're logged in" : "You're logged out"
    return (
      <div className="App" >
        { TodoItems}
        <h1>{this.state.count}</h1>
        <button onClick={this.increaseClick}>Increase</button>
        <button onClick={this.decreaseClick}>Decrease</button>
        <Conditional isLoading={this.state.isLoading} />
        <button onClick={this.handleClick}>{buttonText}</button>
        <h3>{logCheck}</h3>
        <input type="text" value={this.state.firstName} name="firstName" placeholder="First Name" onChange={this.handleChange1} />
        <br />
        <input type="text" value={this.state.lastName} name="lastName" placeholder="Last Name" onChange={this.handleChange1} />
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <textarea value="some default values" />
        <br />
        <input type="checkbox" checked={this.state.isChecked} onChange={this.handleChange1} name="isChecked" />
        <label>
          <input type="radio" name="gender" value="male" checked={this.state.gender === "male"} onChange={this.handleChange1} /> Male
        </label>
        <label>
          <input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange1} /> Female
        </label>
        <h2>You are a {this.state.gender}</h2>
        <select value={this.state.color} name="color" onChange={this.handleChange1}>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="black">Black</option>
          <option value="white">White</option>
        </select>
        <h3>You like {this.state.color}</h3>

      </div>
    );
  }

}

export default App;

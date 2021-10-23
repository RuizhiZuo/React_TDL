import './App.css';
import React, { Component } from 'react'

import Header from './Component/Header';
import List from './Component/List';
import Footer from './Component/Footer'

export default class App extends Component {

  state = {
    todos: [
      { id: '001', name: 'chifan', done: true },
      { id: '002', name: 'shuijiao', done: true },
      { id: '003', name: 'coding', done: false },
      { id: '004', name: 'coding', done: false },
      { id: '005', name: '逛街', done: true },
    ]
  }
  
  addTodo=(todoObj)=>{
    const {todos}=this.state
    const newTodos=[todoObj,...todos]
    this.setState({todos:newTodos})
  }


  render() {
    const { todos } = this.state
    return (
      <div className='todo-container'>
        <div className='todo-wrap'>
          <Header addTodo={this.addTodo}/>
          <List todos={todos} />
          <Footer />
        </div>

      </div>
    )
  }
}
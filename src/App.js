import React, { Component } from 'react';
import gql from "graphql-tag";
import { graphql } from 'react-apollo';

const TodosQuery = gql`
{
  todos{
    id
    text
    complete
  }
}
`;

class App extends Component {
  render(){
    console.log(this.props)
    // destructuring props
    const {
      data: { loading, todos } 
    } = this.props
    if (loading) {
      return null; 
    }


    return (
      <div className="App">
        {todos.map(todo => <div key = {`${todo.id}-todo-item`}>{todo.text}</div>)}
      </div>
    );
  }
}

export default graphql(TodosQuery)(App);

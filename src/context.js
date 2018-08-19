import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: "John Breno",
        email: "jbreno@magro.com",
        phone: "555-555-5555"
      },
      {
        id: 2,
        name: "Focao Foquinha",
        email: "fox@magro.com",
        phone: "222-222-2222"
      },
      {
        id: 3,
        name: "Maezinha Maezao",
        email: "mother@magro.com",
        phone: "333-333-3333"
      }
    ],
    dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
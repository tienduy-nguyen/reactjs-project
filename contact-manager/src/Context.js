import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    contacts: [
      {
        id: '1',
        name: 'Newell Kulas',
        email: 'Margie_Sauer@yahoo.com',
        phone: '103.324.7165',
      },
      {
        id: '2',
        name: 'Ms. Karianne Wisoky',
        email: 'Joshuah.Treutel@gmail.com',
        phone: '(609) 586-7846 x57405',
      },
      {
        id: '3',
        name: 'Allene Larkin',
        email: 'Kirsten_Abernathy0@yahoo.com',
        phone: '004-078-2139 x75937',
      },
      {
        id: '4',
        name: 'Madonna Ortiz',
        email: 'Kailee_Connelly70@hotmail.com',
        phone: '(637) 280-4278',
      },
      {
        id: '5',
        name: 'Price Runolfsdottir',
        email: 'Nick.Greenfelder1@yahoo.com',
        phone: '686.395.3163 x5144',
      },
      {
        id: '6',
        name: 'Dr. Jazmin Stoltenberg',
        email: 'Dolores_Heathcote@hotmail.com',
        phone: '715-267-9560',
      },
      {
        id: '7',
        name: 'Laurianne Green',
        email: 'Jayne.Larkin@hotmail.com',
        phone: '545-086-1241 x004',
      },
    ],
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
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

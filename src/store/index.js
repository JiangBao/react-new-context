import React, { createContext, Component } from 'react';

/**
 * context entity
 */
const { Provider, Consumer } = createContext();

/**
 * Provider
 */
export class Providers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    this.actions = {
      increment: () => this.setState({count: this.state.count + 1}),
      decrement: () => this.setState({count: this.state.count - 1}),
    };
  }

  render() {
    return (
      <Provider value={{states: this.state, actions: this.actions}}>
        {this.props.children}
      </Provider>
    );
  } 
}

/**
 * Consumer
 */
export const Consumers = ({children}) => (
  <Consumer>
    {children}
  </Consumer>
);
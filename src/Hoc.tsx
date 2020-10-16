import React, {Component} from 'react';

const initialState = {
  name: 'Bob',
  message: 'Hello there!'
}

type State = Readonly<typeof initialState>;

const messageHoc = (WrappedComponent: any) => {
  class HOC extends Component<{}, State> {
    readonly state: State = initialState;

    render() {
      return (
        <WrappedComponent name={this.state.name} message={this.state.message} />
      )
    }
  }
  return HOC
}

export default messageHoc;
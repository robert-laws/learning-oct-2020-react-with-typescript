import React from 'react';
import './App.scss';
import Message from './Message'

function App() {
  // basic types
  let stringVal: string = 'hello';
  let numVal: number = 2
  let boolVal: boolean = false;
  // let numArray: number[] = [2, 4, 6]
  // let stringArray: Array<string> = ['hello', 'welcome', 'howdy']

  // // complex types - tuple
  // let tupleOne: [string, number] = ['hello', 5];
  // let tupleTwo: [number, number, boolean] = [4, 5, true];

  // // complex types - enum
  // enum Codes {first = 1, second = 2};

  // // type any
  // let title: any = 'Bob';

  // // void type
  // const hello = (): void => {
  //   console.log('hello!');
  // }

  return (
    <div className='App'>
      <h2>App</h2>
      <p>{stringVal} is {typeof stringVal} type.</p>
      <p>{numVal} is {typeof numVal} type.</p>
      <p>{boolVal.toString()} is {typeof boolVal} type.</p>
      <hr/>
      <Message message='this is a simple message' person='Hal Hope' />
    </div>
  );
}

export default App;

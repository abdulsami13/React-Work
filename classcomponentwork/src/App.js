import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Greet from './Component/Greet';
import Welcome from './Component/Welcome';
import Hello from './Component/Helllo';
import Message from './Component/Message';
import Count from './Component/counter';

class App extends Component {
  render() {
  return (
    <div className="App">
<Message />
<Count />

   {/* <Greet  name="Bruce" />
   <Greet  name="Sami" />
 
   <Welcome name="Ghani"/> */}

   {/* <Hello /> */}
    </div>
  );
}
}
export default App;

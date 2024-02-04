import React from 'react';
import './App.css';
import Person from './Person';
import { Country } from './Person';

function App() {
  return (
    <div className="App">
      <Person
      name={'John Doe'}
      email={'johndoe@gmail.com'}
      age={43}
      isMarried={true}
      courses={['react', 'mysql', 'python']}
      country={Country.Iran}
      />
    </div>
  );
}

export default App;

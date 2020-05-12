import React from 'react';
import FormTask from './components/FormTask';
import ListTasks from './containers/ListTasks';

const App = () => {
  return (
    <div className="App">
      <FormTask/>
      <ListTasks/>
    </div>
  );
}

export default App;

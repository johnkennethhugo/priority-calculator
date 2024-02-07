import './styles/App.css';
import Sidebar from './components/sidebar/Sidebar.js';
import List from './components/list/List.js';

import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  const annexObject = (entry) => {
    setList([...list, entry]);
  };

  const deleteObject = (id) => {
    const updatedList = list.filter(entry => entry.id !== id);
    setList(updatedList);
  };

  return (
    <div className="App">
      <Sidebar onProceed={annexObject}/>
      <List data={list} onDeleteEntry={deleteObject}/>
    </div>
  );
}

export default App;

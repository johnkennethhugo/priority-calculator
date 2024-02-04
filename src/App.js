import './styles/App.css';
import Sidebar from './components/sidebar/Sidebar.js';
import List from './components/list/List.js';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <List/>
    </div>
  );
}

export default App;

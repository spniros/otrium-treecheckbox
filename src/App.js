import logo from './logo.svg';
import './App.css';
import TreeView from './component/treeview';
import React from 'react';
import Filter from './view/filter';

function App() {
  return (
   
    <div className="App">
      {/* <TreeView/> */}
      <Filter/>
    </div>
  );
}

export default App;

import React from 'react';
import { AddNode } from '../../nodes/add_node';
import { Editor } from '../editor/Editor';
import './App.css';

function App() {
  const placedNodes = [
    { node: AddNode, x: 100, y: 100 },
  ];

  return (
    <div className="App">
      <Editor placedNodes={placedNodes} />
    </div>
  );
}

export default App;

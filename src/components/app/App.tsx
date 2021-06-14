import React from 'react';
import { Module } from '../../core/type_system/type';
import { AddNode } from '../../nodes/add_node';
import { Editor } from '../editor/Editor';
import { Hierarchy } from '../hierarchy/Hierarchy';
import './App.css';

function App() {
  const module5 = new Module('Module 5', [], [], []);
  const module4 = new Module('Module 4', [], [], []);
  const module3 = new Module('Module 3', [], [], []);
  const module2 = new Module('Module 2', [module4, module5], [], []);
  const module1 = new Module('Root module', [module2, module3], [], []);

  return (
    <div className="App">
      <div className='hierarchy-wrapper'>
        <Hierarchy rootModule={module1} />
      </div>
    </div>
  );
}

export default App;

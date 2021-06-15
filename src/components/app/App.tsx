import { Module } from '../../core/type_system/type';
import { Hierarchy } from '../hierarchy/Hierarchy';
import './App.css';

const prepareModule = () => {
  const module5 = new Module('Module 5', [], [], []);
  const module4 = new Module('Module 4', [], [], []);
  const module3 = new Module('Module 3', [], [], []);
  const module2 = new Module('Module 2', [module4, module5], [], []);
  const module1 = new Module('Root module', [module2, module3], [], []);
  return module1;
};

const App = () => {
  const rootModule = prepareModule();

  return (
    <div className="app container-fluid">
      <div className="row h-100">
        <div className="hierarchy-wrapper col-3">
          <Hierarchy rootModule={rootModule} />
        </div>
        <div className="main-content col">
          Main content
        </div>
      </div>
    </div>
  );
};

export default App;

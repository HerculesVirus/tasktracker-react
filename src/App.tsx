import React , {FC} from 'react';
import { BrowserRouter as Router , Navigate, Route, Routes } from 'react-router-dom';
import CreateTask from './views/Task/Create';
import ListOfTask from './views/Task/List';
import BulkDelete from './views/Task/BulkDelete';
import logo from './logo.svg';
import './App.css';

const App: FC = ()=> {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route  
            path="/" 
            element={<Navigate to="/list-tasks" replace />}
            />
            <Route  path="/list-tasks" element={<ListOfTask />} />
            <Route  path="/create-task" element={<CreateTask />}/>
            <Route  path="/bulk-delete" element={<BulkDelete />} />
            {/* <Route  path="/" element={<CreateTask />}/> */}
          </Routes>
        </Router>
      </div>
    </>

  );
}

export default App;

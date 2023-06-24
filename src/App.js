import data from './Components/EmpData.json';
import EmployeeList from './Components/EmployeeList';
import {Routes, Route} from 'react-router-dom';
import Profile from './Components/Profile';

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<EmployeeList data={data}/>} />
        <Route path='/profile/:id' element={<Profile data={data}/>}/>
      </Routes> 
    </div>
  )
}

// Note - The duration between two successive api calls is quite large, so it provides status
// 429 (Too many requests) if called in quick succession

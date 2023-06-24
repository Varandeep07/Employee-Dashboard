import { useNavigate } from 'react-router-dom';
import './EmployeeList.css';
import pic from '../Images/images2.jpg';
import { useState, useEffect } from 'react';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { Checkbox } from '@atlaskit/checkbox';

export default function EmployeeList({ data }) {
  const navigate = useNavigate();
  const [searchId, setSearchId] = useState('');
  const [curData, setCurData] = useState(data);
  let visitedIds = new Set();

  const handleCardClick = (id) => {
    navigate(`/profile/${id}`);
  };

  const handleSearchClick = () => {
    const filteredData = data.filter((emp) => emp.id == searchId);

    if (filteredData.length) {
      alert('Record Found Successfully!');
    } else if (searchId) {
      alert('Invalid id. Record NOT FOUND!');
    }

    setCurData(filteredData.length ? filteredData : data);
  };

  const handleDelete = (event,id) => {
    event.stopPropagation();
    const filteredData = curData.filter((emp)=> emp.id!==id);
    setCurData(filteredData);
  }

  useEffect(() => {
    if(searchId==''){
      setCurData(data);
    }
  }, [searchId]);

  const handleEditButton = (event, id) => {
    event.stopPropagation();
    console.log(event);
    if(visitedIds.has(id)){
      visitedIds.delete(id);
    }
    else{
      console.log("added: ",id);
      visitedIds.add(id);
    } 
  }

  const handleDeleteMultiple = () => {
    if(visitedIds.size){
      const filteredData = curData.filter((emp) => !visitedIds.has(emp.id));
      setCurData(filteredData);
    }
  }
  
  const Items = curData.map((emp) => {
    return (
      <div className="emp-card" key={emp.id} onClick={() => handleCardClick(emp.id)}>
        <img src={pic} alt="not found" />
        <div className="emp-content">
        <div className="edit-icon">
      
          <Checkbox
            onClick={(event)=> handleEditButton(event, emp.id)}
          />
            <EditRoundedIcon/>
            <DeleteOutlineRoundedIcon onClick={(event)=>handleDelete(event,emp.id)}/>
          </div>
          <h2 style={{ fontFamily: 'Inter' }}>{emp.employee_name}</h2>
            <p style={{ color: 'green', fontFamily: 'Roboto Slab'}}>id - {emp.id} </p>
          <div className="info-line">
            <p style={{ color: 'green' }}>Salary - {emp.employee_salary}</p>
            <p style={{ color: 'green' }}>&nbsp;&nbsp;Age - {emp.employee_age}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="emp-list">
      <h1 style={{ fontFamily: 'Inter' }}>Employee List</h1>
      <div className="search-field">
        <span style={{translate: '0px -2px'}}>Search : &nbsp;</span>
        <input
          type="text"
          placeholder="Enter employee id.."
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={handleSearchClick} className='search-btn'>Search</button>
      <div style={{translate: '200px'}}><button className='dlt-btn' onClick={handleDeleteMultiple}>Multiple Delete</button></div>
      </div>
      <div className="Parent-list">{Items}</div>
    </div>
  );
}

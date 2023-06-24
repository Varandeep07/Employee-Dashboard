import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import empImage from '../Images/images2.jpg';
import './Profile.css';

const Profile = ({data}) => {
  let { id } = useParams();
   
  const employee = data.filter((emp) =>{
    return emp.id==id;
  })[0];
    console.log(employee); 
  return (   
    <div className="profile-container">
      <Container>
        <Row className="my-5">
          <Col sm={12} md={8}>
            <Card className="profile-card">
            <Card.Img className='img-fluid my-5' variant="top" src={empImage} alt='img not found'/>
              <Card.Body>
                <Card.Title>{employee.employee_name}</Card.Title>
                <hr />
                <div className='my-6'>
                  <table>
                    <tbody>
                      <tr>
                        <td>Age:</td>
                        <td>{employee.employee_age}</td>
                      </tr>
                      <tr>
                        <td>Salary:</td>
                        <td>{employee.employee_salary}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <div className="back-btn-div">
          <Button className="back-button" variant="outline" href='/'>
            Back  
          </Button>
        </div>
      </Container>  
    </div>
  );
}

export default Profile;

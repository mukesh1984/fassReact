import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { Card, Row, Col, Container } from "react-bootstrap";

function Movies() {
  const [movieData, setMoviesData] = useState([
    { name: "Movies 1", rating: 5, released: "2022-11-20" },
    { name: "Movies 2", rating: 3, released: "2022-11-22" },
    { name: "Movies 3", rating: 3, released: "2022-11-23" },
    { name: "Movies 4", rating: 3, released: "2022-11-24" },
    { name: "Movies 5", rating: 3, released: "2022-11-25" },
    { name: "Movies 6", rating: 3, released: "2022-11-26" },
    { name: "Movies 7", rating: 3, released: "2022-11-27" },
    { name: "Movies 8", rating: 3, released: "2022-11-28" },
    { name: "Movies 9", rating: 3, released: "2022-11-29" },
    { name: "Movies 10", rating: 3, released: "2022-11-30" },
  ]);
  
  const [userData, setUserData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:5000/api/user/list"
      ,{ 
        method: 'post', 
        headers: new Headers({
            'Authorization': 'Basic '+btoa('test:test'), 
            'Content-Type': 'application/json'
            
        }), 
        body:JSON.stringify({"userId":"","pageLimit":"10","page":"1","search":""})
       
    });
      const userData = await response.json();
      console.log("==============>",userData.result)
      setUserData(userData.result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <br></br>
      <h5 style={{ 'text-align': 'center' }}>Movies Layout View</h5>
      <br></br>
      <Container>
        <Row>
          {movieData.map((playerData, k) => (
            <Col key={k} xs={12} md={4} lg={3}>
              <Card>
                <Card.Img src="https://via.placeholder.com/150x75" />

                <Card.Body>
                  <Card.Title>{playerData.name}</Card.Title>
                  <Card.Text>{playerData.rating}</Card.Text>
                  <Card.Text>{playerData.released}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <br></br>
      <h5 style={{ 'text-align': 'center' }}>User Data, Display By APi Call</h5>
      <br></br>
      
      <Container>
        <Row>
          {userData.map((playerData, k) => (
            <Col key={k} xs={12} md={4} lg={3}>
              <Card>
                <Card.Img src="https://via.placeholder.com/150x75" />

                <Card.Body>
                  <Card.Title>{playerData.fName} {playerData.lName}</Card.Title>
                 
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Movies;

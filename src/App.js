import React, { Component } from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
              <div className="pageHeader">
                <Jumbotron fluid>
                  <Container fluid>
                    <h1 className="display-3">Cyberpunk Hustle</h1>
                  </Container>
                </Jumbotron>
              </div>
            </div>
        );
    }
}

export default App;
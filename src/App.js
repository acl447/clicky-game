import React, { Component } from 'react';
// import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
// import Header from './components/Header';
// import Main from './components/Main';
// import Footer from './components/Footer';

class App extends Component {

  state = {

    square: 0,
    score: 0,
    topScore: 0
  };

  handleClick = (squareNumber) => {

    this.setState({ square: squareNumber});
  }
  
  render() {
  
  return (
    
    <Wrapper>
      <Navbar score={this.state.score} topScore={this.state.topScore}  />
      {/* <Header />
      <Main square={this.state.square}/>
      <Footer /> */}
      </Wrapper>
  );

  }
};

export default App;

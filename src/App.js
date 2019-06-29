import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import cat from './cat.jpg';
import dog from './dog.jpg';
import bird from './bird.jpg';
import deer from './deer.jpg';
import turtle from './turtle.jpg';
import hamster from './hamster.jpg';
import squirrel from './squirrel.jpg';
import eagle from './eagle.jpg';
import frog from './frog.jpg';
import giraffe from './giraffe.jpg';
import sheep from './sheep.jpg';
import penguin from './penguin.jpg';


class App extends Component {

  state = {
    imageArray: [{
      id: 1,
      src: cat 
    }, {
      id: 2,
      src: dog
      
    }, {
      id: 3,
      src: bird
    }, {
      id: 4,
      src: deer
    },
    {
      id: 5,
      src: hamster
    },
    {
      id: 6,
      src: turtle
    },
    {
      id: 7,
      src: squirrel
    },
    {
      id: 8,
      src: eagle
    },
    {
      id: 9,
      src: frog
    },
    {
      id: 10,
      src: giraffe
    },
    {
      id: 11,
      src: sheep
    },
    {
      id: 12,
      src: penguin
    }],
    score: 0,
    topScore: 0
  };

  shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  componentDidMount() {

    this.setState({ imageArray: this.shuffleArray(this.state.imageArray)});

  }


  handleClick = (event) => {

   this.setState({ imageArray: this.shuffleArray(this.state.imageArray)});
  };
  
  render() {
  
  return (
    
    <Wrapper>
      <Navbar score={this.state.score} topScore={this.state.topScore}  />
      <Header />
      <Main onClick={this.handleClick}> 
      {this.state.imageArray}
      </Main>  
      <Footer />
      </Wrapper>
  );

  }
};

export default App;

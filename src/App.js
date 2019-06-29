import React, { Component } from 'react';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import images from './images.json';
import ImageCard from './components/ImageCard';


class App extends Component {

  state = {
    imageArray: images,
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

    console.log("component did mount");

    

  };


  handleClick = (event) => {

    console.log("clicked");

   this.setState({ imageArray: this.shuffleArray(this.state.imageArray)});
  };


 
  render() {

  
  return (
    
    <Wrapper>
      <Navbar score={this.state.score} topScore={this.state.topScore}  />
      <Header />
      <Main> 
        <ImageCard
          id={this.state.imageArray[0].id}
          name={this.state.imageArray[0].name}
          image={this.state.imageArray[0].image}
          />
        <ImageCard 
        id={this.state.imageArray[1].id}
        name={this.state.imageArray[1].name}
        image={this.state.imageArray[1].image}
        />
        <ImageCard 
        id={this.state.imageArray[2].id}
        name={this.state.imageArray[2].name}
        image={this.state.imageArray[2].image}
        />
        <ImageCard 
          id={this.state.imageArray[3].id}
          name={this.state.imageArray[3].name}
          image={this.state.imageArray[3].image}
          />
        <ImageCard 
          id={this.state.imageArray[4].id}
          name={this.state.imageArray[4].name}
          image={this.state.imageArray[4].image}
          />
        <ImageCard 
         id={this.state.imageArray[5].id}
         name={this.state.imageArray[5].name}
         image={this.state.imageArray[5].image}
          />
        <ImageCard 
          id={this.state.imageArray[6].id}
          name={this.state.imageArray[6].name}
          image={this.state.imageArray[6].image}
          />
        <ImageCard 
          id={this.state.imageArray[7].id}
          name={this.state.imageArray[7].name}
          image={this.state.imageArray[7].image}
          />
        <ImageCard 
         id={this.state.imageArray[8].id}
         name={this.state.imageArray[8].name}
         image={this.state.imageArray[8].image}
          />
        <ImageCard 
         id={this.state.imageArray[9].id}
         name={this.state.imageArray[9].name}
         image={this.state.imageArray[9].image}
          />
        <ImageCard 
       id={this.state.imageArray[10].id}
       name={this.state.imageArray[10].name}
       image={this.state.imageArray[10].image}
        />
        <ImageCard 
         id={this.state.imageArray[11].id}
         name={this.state.imageArray[11].name}
         image={this.state.imageArray[11].image}
          />
      </Main>  
      <Footer />
      </Wrapper>
  );

  }
};

export default App;

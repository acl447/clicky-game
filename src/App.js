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
    images,
    clickedArray: [],
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",
    shakeit: "false"
  };

  

  clickPicture = id => {

    const shuffledArray = this.shuffleArray(this.state.images);

    this.setState({ images: shuffledArray });

    if (this.state.clickedArray.includes(id)) {

      this.setState({ score: 0, clickedArray: [], message: "Picture has already been clicked! Click to start a new game!", shakeit: "true" });
    }
    else {

      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
        message: "You guessed correctly!",
        shakeit: "false"
      });
    }


    if (this.state.score > this.state.topScore) {

      this.setState({ topScore: this.state.score });
    }
  };



  shuffleArray = (imagesArray) => {


    for (let i = imagesArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [imagesArray[i], imagesArray[j]] = [imagesArray[j], imagesArray[i]];
    
    
    console.log(imagesArray[i]);

    console.log(imagesArray[j]);

    }
   
    return imagesArray;

  };



  render() {



    return (

      <div className="App">
        <Navbar score={this.state.score} topScore={this.state.topScore} message={this.state.message} />
        <Header />
        <Main>
          <Wrapper shakeWrapper={this.state.shakeit} images={this.state.images.map(image => (
          <ImageCard
            id={image.id}
            key={image.id}
            name={image.name}
            image={image.image}
            clickPicture={this.clickPicture}

          />))} /> 
        </Main>
      <Footer />
      </div >
    );

  }
};

export default App;

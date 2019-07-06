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
    clickedArray: [1, 3, 7],
    score: 0,
    topScore: 0
  };

  blah = {

    id: 13,
    stuff: "stuff",
    link: "link"
  };

  shuffleArray = (array) => {

    console.log("shuffleArray called");
    console.log("original array:", array);

    let temp = array.slice();

    for (let i = temp.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [temp[i], temp[j]] = [temp[j], temp[i]];
    }
    this.setState({ imageArray: temp });

    console.log("shuffled array:", temp);

  };


  renderScore = (imageClicked) => {

   
    let clickedArrayCopy = this.state.clickedArray.slice();

    console.log(clickedArrayCopy);

    

    let score = this.state.score;

    console.log("score", score);

    let imageClickedId = imageClicked.id;

    console.log("id of image clicked", imageClickedId);

    for (let i = 0; i < clickedArrayCopy.length; i++) {

     

      if (clickedArrayCopy[i] !== imageClickedId) {

        clickedArrayCopy.push(imageClickedId);

        console.log("updated clickedArrayCopy", clickedArrayCopy);

        score += 1;

        console.log("updated score variable", score);

        this.setState({ clickedArray: clickedArrayCopy, score: score });

        console.log("updated clickedArray in state", this.state.clickedArray);
        console.log("updated score in state", this.state.score);

      }

      // else {

      //   this.setState({ clickedArray: [], score: 0 });

      //   console.log("reset clickedArray", this.state.clickedArray);

      //   console.log("reset score", this.state.score);

      // }
    };
  };



  // componentDidMount() {

  //   this.shuffleArray(this.state.imageArray);

  //   this.renderScore(this.blah);

  // };



  render() {

   

    return (

      <Wrapper>
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <Header />
        <Main>
          <div className="row">
          <div className="col-2"/>
            <div className="col-2">
              <ImageCard
                id={this.state.imageArray[0].id}
                name={this.state.imageArray[0].name}
                image={this.state.imageArray[0].image}
                imageArray={this.state.imageArray}
                shuffleArray={this.shuffleArray}
                renderScore={this.renderScore}
                blah={this.blah}
              />
            </div>
            <div className="col-1"></div>
            <div className="col-3">
              <ImageCard
                id={this.state.imageArray[1].id}
                name={this.state.imageArray[1].name}
                image={this.state.imageArray[1].image}
                imageArray={this.state.imageArray}
                shuffleArray={this.shuffleArray}
                renderScore={this.renderScore}
                blah={this.blah}

              />
            </div>
            <div className="col-1">
              <ImageCard
                id={this.state.imageArray[2].id}
                name={this.state.imageArray[2].name}
                image={this.state.imageArray[2].image}
                imageArray={this.state.imageArray}
                shuffleArray={this.shuffleArray}
                renderScore={this.renderScore}
                blah={this.blah}
              />
            </div>
            <div className="col-1"></div>
            <div className="col-2"></div>
          </div>
          <div className="row">
            <div className="col-2"/>
            <div className="col-2">
              <ImageCard
                id={this.state.imageArray[3].id}
                name={this.state.imageArray[3].name}
                image={this.state.imageArray[3].image}
                imageArray={this.state.imageArray}
                shuffleArray={this.shuffleArray}
                renderScore={this.renderScore}
                blah={this.blah}
              />
            </div>
            <div className="col-1"/>
            <div className="col-3">
              <ImageCard
                id={this.state.imageArray[4].id}
                name={this.state.imageArray[4].name}
                image={this.state.imageArray[4].image}
                imageArray={this.state.imageArray}
                shuffleArray={this.shuffleArray}
                renderScore={this.renderScore}
                blah={this.blah}
              />
            </div>
            <div className="col-1">
              <ImageCard
                id={this.state.imageArray[5].id}
                name={this.state.imageArray[5].name}
                image={this.state.imageArray[5].image}
                imageArray={this.state.imageArray}
                shuffleArray={this.shuffleArray}
                renderScore={this.renderScore}
                blah={this.blah}
              />
            </div>
            <div className="col-1"></div>
            <div className="col-2"></div>
          </div>
          <div className="row">
            <div className="col-2"/>
            <div className="col-2">
              <ImageCard
                id={this.state.imageArray[6].id}
                name={this.state.imageArray[6].name}
                image={this.state.imageArray[6].image}
                imageArray={this.state.imageArray}
                shuffleArray={this.shuffleArray}
                renderScore={this.renderScore}
                blah={this.blah}
              />
            </div>
            <div className="col-1"/>
            <div className="col-3">
              <ImageCard
                id={this.state.imageArray[7].id}
                name={this.state.imageArray[7].name}
                image={this.state.imageArray[7].image}
                imageArray={this.state.imageArray}
                shuffleArray={this.shuffleArray}
                renderScore={this.renderScore}
                blah={this.blah}
              />
            </div>
            <div className="col-1">
              <ImageCard
                id={this.state.imageArray[8].id}
                name={this.state.imageArray[8].name}
                image={this.state.imageArray[8].image}
                imageArray={this.state.imageArray}
                shuffleArray={this.shuffleArray}
                renderScore={this.renderScore}
                blah={this.blah}
              />
            </div>
            <div className="col-1"/>
            <div className="col-2"/>
          </div>
          <div className="row">
            <div className="col-2"/>
            <div className="col-2">
              <ImageCard
                id={this.state.imageArray[9].id}
                name={this.state.imageArray[9].name}
                image={this.state.imageArray[9].image}
                imageArray={this.state.imageArray}
                shuffleArray={this.shuffleArray}
                renderScore={this.renderScore}
                blah={this.blah}
              />
            </div>
            <div className="col-1"/>
            <div className="col-3">
              <ImageCard
                id={this.state.imageArray[10].id}
                name={this.state.imageArray[10].name}
                image={this.state.imageArray[10].image}
                imageArray={this.state.imageArray}
                shuffleArray={this.shuffleArray}
                renderScore={this.renderScore}
                blah={this.blah}
              />
            </div>
            <div className="col-1">
              <ImageCard
                id={this.state.imageArray[11].id}
                name={this.state.imageArray[11].name}
                image={this.state.imageArray[11].image}
                imageArray={this.state.imageArray}
                shuffleArray={this.shuffleArray}
                renderScore={this.renderScore}
                blah={this.blah}
              />
            </div>
            <div className="col-1"/>
            <div className="col-2"/>
          </div>
        </Main>
        <Footer />
      </Wrapper>
    );

  }
};

export default App;

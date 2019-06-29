import React from 'react';



function ImageCard(props) {

  const styles = {

    height: '900px'
  };

   
  return (
    <div className="card" style={styles}>
      <div className="img-container">
        <img id={props.id} alt={props.name} src={props.image} />
      </div>
    </div>
    );
}


export default ImageCard;
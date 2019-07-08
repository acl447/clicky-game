import React from 'react';



function ImageCard(props) {

  const styles = {

    height: '143px',
    width: '143px'
  };

  



  return (
    <div className="card mb-5" style={styles}>
      <div className="img-container">
        <img style={styles} className="img-fluid" id={props.id} alt={props.name} src={props.image} onClick={() => props.clickPicture(props.id)} />
      </div>
    </div>
  );
}


export default ImageCard;
import React from 'react';



function ImageCard(props) {

  const styles = {

    maxHeight: '200px',
    maxWidth: '200px'
  }

 

   
  return (
    <div className="card">
      <div className="img-container">
        <img style={styles} className="img-fluid" id={props.id} alt={props.name} src={props.image} />
      </div>
    </div>
    );
}


export default ImageCard;
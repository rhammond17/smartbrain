import React from 'react';
import './FaceRecognition.css';

const renderFaceBoxes = (faceBoxes) => {
  return faceBoxes.map((box, key) => {
    return (
      <div
        key={key}
        className='bounding-box'
        style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
      ></div>
    );
  });
};

const FaceRecognition = ({ imageURL, faceBoxes }) => {
  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img id='inputimage' alt='' src={imageURL} width='500px' height='auto' />
        {renderFaceBoxes(faceBoxes)}
      </div>
    </div>
  );
};

export default FaceRecognition;

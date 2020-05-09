import React from 'react';

const ImageEntry = ({ image, onClick, number }) => (
  <button className="ImageButton" type="button" onClick={(e) => onClick(e)}>
    <img className="Thumbnail" src={image} alt={number} />
  </button>
);

export default ImageEntry;

// import styled from 'styled-components';

// const Thumbnail = styled.img`
//   width: 60px;
//   height: 45px;
// `;

// const ImageButton = styled.button`
//   display: block;
//   cursor: pointer;
//   background-color: white;
//   border: 1px solid lightgrey;
//   margin-left 10px;
//   margin-top: 5px;
//   margin-bottom: 5px;
// `;

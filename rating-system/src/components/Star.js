import React from 'react';
import { FaStar } from 'react-icons/fa'; 
import '../styles/Star.css';  

const Star = ({ selected, onClick }) => (
  <span className={selected ? 'star selected' : 'star'} onClick={onClick}>
    <FaStar />
  </span>
);

export default Star;


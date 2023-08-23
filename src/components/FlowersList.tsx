import React from 'react';
import Flower from "./Flower";

const FlowersList = () => {
  return (
    <div className="flowers_list">
      <div className="searchbar">
        <input type="text" placeholder="Search plant"/>
      </div>
      <Flower/>
      <Flower/>
      <Flower/>
    </div>
  );
};

export default FlowersList;
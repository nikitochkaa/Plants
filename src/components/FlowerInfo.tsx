import React from 'react';

const FlowerInfo = () => {
  return (
    <div className="flower_info">
      <span>Flower Name</span>
      <div className="basic_info">
        <div className="info">
          <div className="icon">💧</div>
          <div className="water_info">water</div>
        </div>
        <div className="info">
          <div className="icon">💨</div>
          <div className="humidity_info">humidity</div>
        </div>
        <div className="info">
          <div className="icon">🔆</div>
          <div className="sunlight_info">sunlight</div>
        </div>
      </div>

    </div>
  );
};

export default FlowerInfo;
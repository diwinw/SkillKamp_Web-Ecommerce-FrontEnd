import React, { useState } from "react";
import "./PicturePuzzle.css";

const PicturePuzzle = () => {
  const [emptyIndex, setEmptyIndex] = useState(15);
  const [tiles, setTiles] = useState([...Array(16).keys()]);

  const shuffleTiles = () => {
    const shuffledTiles = tiles.sort(() => Math.random() - 0.5);
    setTiles(shuffledTiles);
    setEmptyIndex(shuffledTiles.indexOf(15));
  };

  const handleTileClick = (index) => {
    const distance = Math.abs(index - emptyIndex);

    if (distance === 1 || distance === 4) {
      const newTiles = [...tiles];
      newTiles[emptyIndex] = newTiles[index];
      newTiles[index] = 15;
      setTiles(newTiles);
      setEmptyIndex(index);
    }
  };

  return (
    <div className="puzzle-container">
      {tiles.map((tile, index) => (
        <div
          key={tile}
          className={`tile ${tile !== 15 ? "clickable" : ""}`}
          style={{
            backgroundImage: `url('https://picsum.photos/id/${tile}/200/200')`,
            gridArea: `tile${tile + 1}`,
          }}
          onClick={() => handleTileClick(index)}
        />
      ))}
      <button className="shuffle-button" onClick={shuffleTiles}>
        Shuffle Tiles
      </button>
    </div>
  );
};

export default PicturePuzzle;

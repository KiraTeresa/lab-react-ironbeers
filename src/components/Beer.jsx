import React from "react";
import { useNavigate } from "react-router-dom";

function Beer({ beerInfo }) {
  const { image_url, name, tagline, contributed_by, _id } = beerInfo;
  const navigate = useNavigate();

  return (
    <div
      className="beer-card"
      onClick={() => {
        navigate(`/beers/${_id}`);
      }}
    >
      <div className="beer-img">
        <img src={image_url} alt={name}></img>
      </div>
      <div className="beer-info">
        <h2>{name}</h2>
        <h3>{tagline}</h3>
        <p>
          <strong>Created by:</strong> {contributed_by}
        </p>
      </div>
    </div>
  );
}

export default Beer;

import React from "react";
//Styling and Animation
import styled from "styled-components";


  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    if (id !== game.id) dispatch(loadDetail(id));
  };

  return (
    <StyledGame
      onClick={loadDetailHandler}
      variants={popup}
      initial="hidden"
      animate="show"
    >
      <Link to={`game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        {image && <img src={smallImage(image, 640)} alt={name} />}
      </Link>
    </StyledGame>
  );


const StyledGame = styled("div")`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 45vh;
    object-fit: cover;
  }
`;

export default Game;

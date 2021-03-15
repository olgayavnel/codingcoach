import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  height: 350px;
  overflow: auto;
  padding: 1em;
  text-align: center;
`;

const Title = styled.h1`
  color: palevioletred;
`;

const P = styled.p`
  color: black;
`;

const MovieCard = ({ data }) => {
  const { title, description } = data;

  return (
    <Card>
      <Title>{title}</Title>
      <P>{description}</P>
    </Card>
  );
};

export default MovieCard;

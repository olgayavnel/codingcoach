import axios from 'axios';
import React, { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto;
  padding: 2em;
  margin: 1em;
  justify-content: space-around;
`;

const Movies = () => {
  let [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('https://ghibliapi.herokuapp.com/films');

      if (result && result.data) {
        setData(result.data);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <Wrapper>
      {data.slice(0, 6).map((item) => {
        return <MovieCard key={item.id} data={item} />;
      })}
    </Wrapper>
  );
};

export default Movies;

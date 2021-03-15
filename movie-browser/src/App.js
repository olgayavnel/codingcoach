import React from 'react';
import FeaturedImage from './FeaturedImage';
import Movies from './Movies';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 4em;
  background: papayawhip;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: auto auto;
  grid-gap: 5px;
`;

const Item1 = styled.div`
  grid-column-start: 1;
  grid-column-end: 7;
  justify-self: center;
`;

const Item2 = styled.div`
  grid-column-start: 1;
  grid-column-end: 7;
`;

const App = () => {
  return (
    <Wrapper>
      <Item1>
        <FeaturedImage />
      </Item1>
      <Item2>
        <Movies />
      </Item2>
    </Wrapper>
  );
};

export default App;

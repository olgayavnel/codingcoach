import React from 'react';
import img from './img1.jpg';
import styled from 'styled-components';

const Box = styled.div`
  position: relative;
  border: 1px solid #fff;
  background-image: url(${img});
  width: 100vw;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Text = styled.h1`
  position: absolute;
  font-size: 5rem;
  color: white;
  left: 16rem;
`;

const Paragraph = styled.p`
  position: absolute;
  font-size: 2rem;
  color: white;
  left: 16rem;
  top: 10rem;
`;

const FeatureImage = () => {
  return (
    <Box>
      <Text>Welcome to Tetflix</Text>
      <Paragraph>Here you can find all the movies you want.</Paragraph>
    </Box>
  );
};

export default FeatureImage;

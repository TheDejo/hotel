import React from 'react';
import Carrousel from '../components/Carrousel';
import {SliderData} from '../data/SliderData';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';

const Home = () => {
  return (
    <>
      <Carrousel slides={SliderData}/>
      <Services />
      <FeaturedRooms />
    </>
  );
};

export default Home;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

import '../css/style.css';
import '../css/bootstrap.min.css';

import Carousel from "./Carousel";
import Search from "./Search";
import Category from "./Category";
import About from "./About";
import Jobs from "./Jobs";
import Testimonial from "./Testimonial";
import Back from "./Back";

export default function Home() {
  return (
  <>
    <Carousel/>
    <Search/>
      <Category/>
      <About/>
      <Jobs/>
      <Testimonial/>
       <Back/>
  </>
  );
}


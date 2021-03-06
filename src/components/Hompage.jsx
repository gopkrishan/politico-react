import React from 'react';
import Jumbotron from './common/Jumbotron';
import Homeinfo from './common/Homeinfo';
import Header from '../container/header.container';

const boxes1 = [
  {
    id: 1,
    value: 'Sign up or Sign In',
    className: 'how-box',
    icon: 'fas fa-sign-in-alt',
  },
  {
    id: 2,
    value: 'Navigate to vote on the dashboard',
    className: 'how-box',
    icon: 'fas fa-bars',
  },
  {
    id: 3,
    value: 'Look for the office and your desired candidate',
    className: 'how-box',
    icon: 'fas fa-users',
  },
  {
    id: 4,
    value: 'Then vote',
    className: 'how-box',
    icon: 'fas fa-vote-yea',
  },
];

const boxes2 = [
  {
    id: 1,
    value: 'Sign up or Sign In',
    className: 'how-box',
    icon: 'fas fa-sign-in-alt',
  },
  {
    id: 2,
    value: 'Navigate to vote on the politician tab',
    className: 'how-box',
    icon: 'fas fa-republican',
  },
  {
    id: 3,
    value: 'Choose your party and office',
    className: 'how-box',
    icon: 'fas fa-mouse-pointer',
  },
  {
    id: 4,
    value: 'Run for office',
    className: 'how-box',
    icon: 'fas fa-thumbs-up',
  },
];

const Homepage = () => {
  return (
    <div>
      <Header />
      <Jumbotron />
      <Homeinfo boxesOne={boxes1} boxesTwo={boxes2} />
    </div>
  );
};

export default Homepage;

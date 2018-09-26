import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DogsList from './components/DogsList';

it('renders without crashing', () => {
  const dogslist = new DogsList()
  dogslist.updateBreeds([])
});

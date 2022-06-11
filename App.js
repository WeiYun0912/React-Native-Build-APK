import axios from 'axios';
import React from 'react';

import RootNavigation from './RootNavigation';

const App = () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
  return <RootNavigation />;
};

export default App;

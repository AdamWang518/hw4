import React from 'react';
import ReactDOM from 'react-dom';
import User from './github_user'
import reportWeb from './reportWeb';

ReactDOM.render(
  <User source="https://api.github.com/users/AdamWang518" />,
  document.getElementById('root')
);
reportWeb();
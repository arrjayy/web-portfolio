import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'RJ\'s app with React with Webpack and Babel, this time with hotswapping.';

ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
);

module.hot.accept();
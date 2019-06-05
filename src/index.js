import React from 'react';
import ReactDOM from 'react-dom';

import Country from './Country';

import * as serviceWorker from './serviceWorker';
ReactDOM.render(<Country />, document.getElementById('root'));
serviceWorker.unregister();

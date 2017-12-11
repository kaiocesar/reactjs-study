import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import HelloWorld from './HelloWorld'
import PropsValidation from './PropsValidation'
import Events from './Events'

ReactDOM.render(
    // <PropsValidation name="Bruna" age="27" height="160" />, 
    <Events />,
    document.getElementById('root')
);

registerServiceWorker();

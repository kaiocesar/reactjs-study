import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import HelloWorld from './HelloWorld'
import PropsValidation from './PropsValidation'
import Events from './Events'
import Translate from './Translate'

ReactDOM.render(
    // <PropsValidation name="Bruna" age="27" height="160" />, 
    // <Events />,
    <Translate />,
    document.getElementById('root')
);

registerServiceWorker();

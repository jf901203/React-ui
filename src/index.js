import React from 'react';
import {render} from 'react-dom';
import App from './componets/App';
// import 'antd-mobile/dist/antd-mobile.css';


import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('root'));

serviceWorker.unregister();

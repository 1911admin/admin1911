import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import * as serviceWorker from './serviceWorker';

//引入antd的全局样式
import 'antd/dist/antd.css';
//引入axios
import axios from 'utils/axios.js'
//vue中组件继承实例，react中，Component是属于reaction中的方法
React.Component.prototype.$axios=axios

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

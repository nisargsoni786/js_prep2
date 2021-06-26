import React from 'react';
import ReactDOM from 'react-dom';
import Getlist from './components/Getlist';
import Postlist from './components/Postlist';
import Formhk from './hooks/Formhk';
import Hk from './hooks/Hk';
import Mouse from './hooks/Mouse';
import Reduce from './hooks/Reduce';
import App from './route/App';
import {BrowserRouter} from 'react-router-dom';
import './index.css'
import Useef from './hooks/useef';
import Main from './redux/cake/Main'
import {Provider} from 'react-redux'
import store from './redux/store';
import Maintwo from './redux/cake/Maintwo';
import Mainttt from './components/Mainttt';
import Res from './components/Res';
import Videoplayer from './components/Videoplayer';
import Tp from './hooks/Tp';
// import Greet from './cmp/Greet';
// import Msg,{Apl} from './cmp/Msg';
// import Eve from './cmp/Eve';
// import Even from './cmp/event';
// import $ from 'jquery';
// import Form from './cmp/Form';
// import Comp from './cmp/Comp';

ReactDOM.render(
    // <div>
     <Provider store={store}>
         <Tp/>
    <Res/>

    {/* <Res/> */}
    {/* <Main/>
    <Maintwo/> */}
    {/* <Mainttt/> */}

    </Provider>
    // </div>

, document.getElementById('root') )
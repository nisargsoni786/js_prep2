import {createStore} from 'redux';
import {reducer} from './cake/Redu'



const store=createStore(reducer);

export default store;
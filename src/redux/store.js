/*
! store oluşturma
1- redux kütüphanesinden "createStore" metodu import edilir.
2- store içerisinde tutulan veriler kategorize edilir ve reducer lar oluturulur
3- birden fazla recucer varsa oluşturulan reducer lar  combineReducer metodu ile birleştirilir.
4- store oluşturulan yeni reducer tanıtılır
5- oluşturulan store projeye tanıtılır.

*/
import {createStore, combineReducers } from 'redux';
import todoReducer from './reducers/todoReducer';
import userReducer from './reducers/userReducer';

// birden fazla varsa birleştirilir.
const rootReducer = combineReducers ({
    todoReducer,
    userReducer,

})
// store'u oluştur ve reducer'ları tanıt
const store  = createStore(rootReducer);

export default store;


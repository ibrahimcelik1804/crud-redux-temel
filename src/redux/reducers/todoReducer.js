/*
! reducer
* store!un nasıl değişecxeğine karar verir
* reducer normal bir fonksiyondur
* iki parametre alır
* > state : store'da tutulan verinin son durumu
* > action : verilerin nasıl değişeceğine karar veren obje.
? önemli : reducer fonksiyonunda return edilen veri store'un son hali olur.

*/

import { ActionTypes } from "../actionType";

// state de tutulan verinin ilk degeri
const initialState = {
  todos: [],
  categoty: [],
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      const tempTotos = state.todos.concat(action.payload);
      return { ...state, todos: tempTotos };
    
      case ActionTypes.REMOVE_TODO:
      
      const filtred = state.todos.filter((todo) => todo.id !== action.payload);

      return { ...state, todos: filtred };

    case ActionTypes.UPDATE_TODO:
    //    console.log("state", state, "payload",action.payload)
      const newTodos = state.todos.map((i) =>
        i.id === action.payload.id ? action.payload : i
      );

      return { ...state, todos: newTodos };

    default:
      return state;
  }
};

// reducer'ı store tanıtmak için export et
export default todoReducer;

// const copyTodos = [...state.todos];
// const index = copyTodos.findIndex(
//   (todo) => todo.id === action.payload.id
// );
// copyTodos.splice(index, 1, action.payload);

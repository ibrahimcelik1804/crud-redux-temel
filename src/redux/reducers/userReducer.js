const initialState={
    todos:[],
    categoty:[],

}
const userReducer = (state= initialState, action) =>{
    switch(action.type){
        case 'ADD_user':
            return'boş';
        case 'REMOVE_user':
            return 'BOŞ';
        
            default:
            return state;
        

    }
};

// reducer'ı store tanıtmak için export et
export default userReducer;
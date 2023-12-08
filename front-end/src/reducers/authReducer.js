const initialState={
  isAuthenticated: false,
  userDetails:[],
  jwtToken:'',
  error: null
}

const authReducer= (state= initialState ,action) =>{
   switch(action.type) {
     case 'LOGIN_SUCCESS':
       return {
          ...state,
          isAuthenticated: true,
          jwtToken: action.payload,
          error: null,
     }
     case 'LOGIN_FAILURE':
       return {
          ...state,
          isAuthenticated: true,
          userDetails: null,
          error: null,
     }
     default :
        return state
   }
}

export default authReducer;
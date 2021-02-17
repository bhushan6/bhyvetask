const initState = {
    accessToken : undefined,
    user : undefined
  };
  
  const postReducer = (state = initState, action) => {
    switch (action.type) {
      case "SET_ACCESSTOKEN":
        return {
            accessToken : action.accessToken,
            user : action.user
        };
      default:
        return state;
    }
  };
  
  export default postReducer;
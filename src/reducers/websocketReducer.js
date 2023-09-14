const initialState = {
    messages: [],
  };
  
  const websocketReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'RECEIVE_MESSAGE':
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default websocketReducer;
  
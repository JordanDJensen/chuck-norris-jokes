let defaultState = {
    joke:""
}

let mainReducer = (state = defaultState, action) => {
    if(action.type === "SET_TEXT"){
        return{
            ...state, 
            joke: action.joke
        }
    } else {
        return{
            ...state
        }
    }
}

export default mainReducer
import axios from "axios";

export function jokeData(joke){
    return(dispatch) => {
        return axios.get(`http://api.icndb.com/jokes/random/`).then((response) =>{
            console.log(response.data)
            dispatch(setText(response.data.value.joke))
        }).catch((err)=>{
            throw err;
        })
    }

}

export function setText(joke){
    return {
        type: "SET_TEXT",
        joke
    }
}
const initialState = {
    counter:0
}
const rootReducer=(state=initialState,action)=>{
    switch(action.type){
        case "Incriment":
            return {
                counter:state.counter+1
            }
        case "Decriment":
            return {
                counter:state.counter-1
            }
        default:return state
    }
}

export default rootReducer;
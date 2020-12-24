const initialstate = {
    counter:0
}
const rootReducer = (state = initialstate,action) =>{
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
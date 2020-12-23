import React from 'react';
import {useSelector , useDispatch } from "react-redux";
function App(){
    const counter = useSelector(state=>state.counter)
    const dispatch = useDispatch()
    return(
        <div>
            <center>
                <button
                    onClick={()=>dispatch({type:"Incriment"})}
                       >
                        incriment
                       </button>
                    <h1
                       >
                        {counter}
                       </h1>
                <button
                    onClick={()=>dispatch({type:"Decriment"})}
                       >
                        decriment
                       </button>
            </center>
        </div>
    )
}
export default App;
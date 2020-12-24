import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { useSelector, useDispatch } from 'react-redux'
const useStyles = makeStyles({
    root:{
        background:'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        
    },
    button:{
        margin:'20px'
    }
})
const App=()=>{
    const counter = useSelector(state=>state.counter)
    const dispatch = useDispatch()
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <button className={classes.button} onClick={()=>dispatch({type:"Incriment"})}> + </button>
            <h1 >{counter}</h1>
            <button className={classes.button} onClick={()=>dispatch({type:"Decriment"})}> - </button>
        </div>
    )
}
export default App;
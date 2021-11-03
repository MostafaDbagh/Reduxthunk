import axios from 'axios'
const Incrementasync = ()=>{
    
      return dispatch=>{
        setTimeout(() => {
            dispatch   ({type:'Increment'})  
           }, 1000);
      }
        
      } 
       
const Dncrementasync = ()=>{
    return dispatch =>{
        setTimeout(() => {
            dispatch({type:'Decrement'})  
        }, 1000);
       
    }
}

const getTitle  = ()=>{
    return dispatch=>{
            dispatch({type:'wait'})
      
        const url = "https://jsonplaceholder.typicode.com/users/1";
        axios.get(url).then(res=>{
            console.log(res);
            setTimeout(() => {
                dispatch({type:'success',payload:res.data.name}) 
                
            }, 2000);
                
        })
}}

export {
Incrementasync,
Dncrementasync,
getTitle
} 
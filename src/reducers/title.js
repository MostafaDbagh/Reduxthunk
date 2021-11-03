

const intialstate ="";

const Title = (state=intialstate,action)=>{
    switch(action.type)
    {
       case "wait":
           return "Loading...";
       case "success": 
           return action.payload;
       default:
            return state;

    }
}

export default Title;
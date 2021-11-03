
import './App.css';

import {useSelector,useDispatch} from 'react-redux'
import {Incrementasync,Dncrementasync,getTitle} from './actions/action';
function App() {
  const counter = useSelector(c  => c.Reducer);
  const Title = useSelector(c  => c.Title);
  const dispatch = useDispatch();
  return (
    
    <div className="App">
      {counter} <br/><br/>
      {console.log(Title)}
   <button onClick={()=>dispatch(Incrementasync())}  >increase slowly</button>
 <button onClick={()=>dispatch(Dncrementasync())} >decrease slowly</button> 
 <button onClick={()=>dispatch(getTitle())} >get data</button> 
 <h2> here is the title:{Title}</h2>
    </div>
  );
}

export default App;

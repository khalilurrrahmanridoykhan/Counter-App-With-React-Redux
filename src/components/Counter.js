import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, restCounter } from './services/actions/counterAction';

const Counter = () => {

    const count = useSelector((state)=> state.count);
    const dispatch =  useDispatch();

    const handelIncrement = () => {
        dispatch(incrementCounter());
    }
    const handelReset = () => {
        dispatch(restCounter());
    }
    const handeldecrement = () => {
        dispatch(decrementCounter());
    }
  return (
    <div>
        <h2>Counter App With Redux:</h2>

        <h3>Count : {count}</h3>
        <button onClick={handelIncrement}>Increment</button>
        <button onClick={handelReset}>Reset</button>
        <button onClick={handeldecrement}>Increment</button>
    </div>
  )
}

export default Counter
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByTwo, multiplyByFive } from "../ReduxItem/Features/counter/counterSlice"

const Counter = () => {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Counter: {count}</h2>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrement -</button>
      <button onClick={() => dispatch(increment())}>Increment +</button>
      <button onClick={() => dispatch(incrementByTwo(2))}>Add 2 +</button>
      <button onClick={() => dispatch(multiplyByFive(5))}>Multiply by - 5</button>
    </div>
  )
}

export default Counter
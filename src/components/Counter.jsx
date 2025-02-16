import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByTwo, multiplyByFive } from "../Features/counter/counterSlice"

const Counter = () => {

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="mb-6 min-h-screen bg-gray-100 text-center py-10">
      <h2 className="text-2xl font-bold mb-4">Redux Counter: {count}</h2>
      <button onClick={() => dispatch(reset())} className="px-4 py-2 bg-red-700 text-white rounded-md mr-2">Reset</button>
      <button onClick={() => dispatch(decrement())} className="px-4 py-2 bg-amber-700 text-white rounded-md mr-2">Decrement -</button>
      <button onClick={() => dispatch(increment())} className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">Increment +</button>
      <button onClick={() => dispatch(incrementByTwo(2))} className="px-4 py-2 bg-blue-700 text-white rounded-md mr-2">Add 2 +</button>
      <button onClick={() => dispatch(multiplyByFive(5))} className="px-4 py-2 bg-green-700 text-white rounded-md mr-2">Multiply by - 5</button>
    </div>
  )
}

export default Counter
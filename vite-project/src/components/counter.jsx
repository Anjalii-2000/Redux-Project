import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, incrementByAmount } from "../redux/counterSlice";

function Counter() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>
        INCREMENT
      </button>
      <button onClick={() => dispatch(decrement())}>
        DECREMENT
      </button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        +5
      </button>
    </div>
  )
}

export default Counter;
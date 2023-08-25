import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../redux/features/counterSlice/counterSlice";

const Counter = () => {

    const { count } = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    

    return (
        <div className="text-center my-10 bg-slate-200 w-1/2 mx-auto py-10 rounded shadow">
            <button className="bg-rose-500 text-white font-bold p-4 rounded my-2" onClick={()=> dispatch(increment())}>Increment</button>
            <div>{count}</div>
            <button className="bg-rose-500 text-white font-bold p-4 rounded my-2 block mx-auto" onClick={()=> dispatch(decrement())}>Decrement</button>

            <button className="bg-rose-500 text-white font-bold p-4 rounded my-2" onClick={()=>dispatch(incrementByValue(5))}>Increment by 5</button>

        </div>
    );
};

export default Counter;
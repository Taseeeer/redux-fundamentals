import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT, DECREMENT, RESET, set, reset, increment, decrement } from '../actions/actions';
import '../App.css';

export default function Counter() {

    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    return (
        <div className="counter">
            <h1>Counter</h1>

            <div className="state">
                <span>{ count }</span>
            </div>

            <div className="buttons">
                <button onClick={() => dispatch(increment())}>Icrement</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(decrement())} >Decrement</button>
            </div>
        </div>
    )
}
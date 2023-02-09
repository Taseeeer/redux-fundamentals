import { useDispatch, useSelector } from 'react-redux';
import { INCREMENT, DECREMENT, RESET, set, reset, increment, decrement } from '../actions/actions';
import '../App.css';
import SetCounter from './set-counter';
import TheState from './the-state';

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
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(reset())}>Reset</button>
                <button onClick={() => dispatch(decrement())} >-</button>
            </div>

            <SetCounter />
            {/* <TheState /> */}
        </div>
    )
}
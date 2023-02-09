import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET } from "../actions/actions";

export default function SetCounter() {
    
    const countState = useSelector(state => state.count);
    const [count, setCount] = useState(countState);
    const dispatch = useDispatch();

    useEffect(() => {
        setCount(countState);
    }, [countState])

    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault();
            dispatch({ type: SET, payload: count })
        }}>
            <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
            <button>Submit</button>
        </form>
    )
}
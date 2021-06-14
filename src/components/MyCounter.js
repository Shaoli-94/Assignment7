import { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'

function MyCounter() {

    const { count, increaseCount, decreaseCount } = useContext(CounterContext);
    return (
        <div>
            <h3>counter component</h3>
            <p>count is : {count}</p>
            <button onClick={increaseCount}>increase count</button>
            <button onClick={decreaseCount}>decrease count</button>
        </div>
    )
}

export default MyCounter
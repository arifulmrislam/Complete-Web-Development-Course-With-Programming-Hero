import { useState } from 'react';

export default function Counter(){
    const [count, setCount] = useState(0);

    return ( 
        <div>
            <h3>Counter: {count}</h3>
        </div>
    )
}

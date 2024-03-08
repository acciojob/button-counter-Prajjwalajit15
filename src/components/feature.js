import React, { useState } from "react";

const Feature = () => {
    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }
    
    return (
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={increment}>Click me</button>
        </div>
    )
}

export default Feature;

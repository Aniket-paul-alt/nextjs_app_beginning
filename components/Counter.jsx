import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)} className="bg-blue-500 text-white py-1 px-3 rounded">Increment : {count}</button>
        </div>
    );
}
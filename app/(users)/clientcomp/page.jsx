"use client";

import { Counter } from "@/components/Counter";
import { useEffect, useState } from "react";

export default function ClientComp() {
    const [postData, setPostData] = useState([]);

    const fetchData = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        console.log(data);
        setPostData(data);
        return data
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <h1>Welcome to the Client Component</h1>
            <p>This component is rendered on the client side.</p>
            <button className="bg-amber-300 text-black py-2 px-2 cursor-pointer" onClick={() => alert("Hello from ClientComp!")}>Click Me</button>
            <Counter/>
            <ul>
                {postData.map((post) => (
                    <li key={post.id}>
                        <h1>{post.id}</h1>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
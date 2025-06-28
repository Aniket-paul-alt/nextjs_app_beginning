"use client"

import { useEffect, useState } from "react";


export default function JokesPage() {
    const [joke, setJoke] = useState({});
    const [showJoke, setShowJoke] = useState(true);

    const url = "https://official-joke-api.appspot.com/random_joke";
    const fetchJoke = async () => {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setJoke(data);
    }

    useEffect(() => {
        fetchJoke();
    }, []);


    return (
        <div className="bg-gray-100 p-4 rounded-lg shadow-md max-w-md mx-auto mt-10 text-center">
            {joke && (
                <div className="mb-4 p-4 bg-white rounded-lg shadow-sm transition-all duration-300">
                    <h2 className="text-xl font-semibold text-gray-800 ">{joke.setup}</h2>
                    {
                        showJoke ? (
                            <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => setShowJoke(false)}>Reveal Punchline</button>
                        ) : (
                            <>
                                <p className="text-gray-600">{joke.punchline}</p>
                                <button className="mt-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={() => setShowJoke(true)}>Hide Punchline</button>
                            </>
                        )
                    }
                </div>
            )}

            <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600" onClick={()=>{
                setShowJoke(true);
                fetchJoke();
            }}>
                Next
            </button>
        </div>
    );
}

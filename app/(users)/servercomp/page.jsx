const ServerComp = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return (
        <div>
            <h1>Server Component</h1>
            <p>This is a server component rendered on the server side.</p>
            <ul>
                {data.map((post) => (
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

export default ServerComp;
export default async function singleUserPage(props) {
    console.log(props)
    const user = await props.params
    console.log(user)

    return (
        <div>
        <h1>User Profile: {user.username}</h1>
        </div>
    );
}
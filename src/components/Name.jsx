function Name({user}) {

    console.log(user)

    return (
        <div>
            <ul>
            {user.map((user, index) => (
                <li key={index}>{user}</li>
            ))}
            </ul>

        </div>
    )

}

export default Name
import { useState } from "react";
import Name from "./Name";

const User = (props) => {
    const [name, setName] = useState(props.name)

    return (
        <>
            <h2>{name}</h2>
            <Name name={setName} />
        </>
    )
}

export default User;
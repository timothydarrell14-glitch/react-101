import { useRef } from "react"

function NewName() {

    const nameRef = useRef("")
    return (
        <div id="newName">
            <h2>New User</h2>
            <label>Add New Name</label><br></br>
            <input placeholder="Add Name" ref={nameRef} />
            <button>Add Name</button>
        </div>
    )
}

export default NewName
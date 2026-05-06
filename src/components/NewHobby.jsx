import {useRef} from "react";

function NewHobby({setHobby}) {
    const newNameRef = useRef("")

    function handleClick(){
        console.log(newNameRef.current.value)
        event.preventDefault();
        setHobby((prevHobby) => {prevHobby, newNameRef.current.value})
    }

    return (
        <div>
            <label>Add new Hobby</label><br></br>
            <input placeholder="Enter new Hobby" ref={newNameRef} /><br></br>
            <button onClick={handleClick}>Add Hobby</button>
        </div>

    )
}

export default NewHobby
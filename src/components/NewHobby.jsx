import {useRef} from "react";

function NewHobby({setHobbies}) {
    const newNameRef = useRef("")

    function handleClick(event){
        let newHobby = newNameRef.current.value
        event.preventDefault();
        setHobbies((prevHobbies) => [...prevHobbies, newHobby])
        newNameRef.current.value = ""
    }

    return (
        <div>
            <h2>New Hobby</h2>
            <label>Add new Hobby</label><br></br>
            <input placeholder="Enter new Hobby" ref={newNameRef} />
            <button onClick={handleClick}>Add Hobby</button>
        </div>

    )
}

export default NewHobby
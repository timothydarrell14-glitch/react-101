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
            <label>Add new Hobby</label><br></br>
            <input placeholder="Enter new Hobby" ref={newNameRef} /><br></br>
            <button onClick={handleClick}>Add Hobby</button>
        </div>

    )
}

export default NewHobby
import {useState} from "react";

function NewHobby() {
    const [newHobby, setNewHobby] = useState("")

    function handleClick(){
        event.preventDefault();
        
        setNewHobby((prevNewHobby) => {prevNewHobby, newHobby
            console.log(newHobby)

        })
    }

    function handleChange(){
        console.log(event.target.value)
    }

    return (
        <div>
            <label>Add new Hobby</label><br></br>
            <input placeholder="Enter new Hobby" value={newHobby} onChange={handleChange}/><br></br>
            <button onClick={handleClick}>Add Hobby</button>
        </div>

    )
}

export default NewHobby
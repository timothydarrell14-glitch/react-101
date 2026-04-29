import React from "react";

function Hobbies(props) {
    let hobby_list = []
    // console.log(props.hobby)
    hobby_list.push(props.hobby)
    // console.log(hobby_list)
    // console.log(...hobby_list)
    return (
        <div>
            <p id={hobby_list}>{hobby_list}</p>
        </div>
    )
}

export default Hobbies
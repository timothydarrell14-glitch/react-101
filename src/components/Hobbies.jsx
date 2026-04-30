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

// let list = ["Photography", "Music", "Sports", "Art", "Playing Chess", "Reading", "Literature", "Researching", "Watching Documentaries", "Cars"]

// class Hobbies {
//     constructor(){
//         this.hobby = list;
//     }
// }

// display(){
//     return (
//         <h1>My Hobbies</h1>
//         <ul>
//             <li>{}</li>
//         </ul>
//     )
// }


export default  Hobbies
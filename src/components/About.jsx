// import React from "react";
function About(props) {
    return (
        <>
            <div>
                <img src={props.link}></img>
                <p>{props.me}</p>
            </div>

        </>
    )
}

export default About
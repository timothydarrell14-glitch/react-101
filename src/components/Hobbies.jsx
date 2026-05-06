
function Hobbies({ hobby }) {

    return (
        
        <div className="hobby">
            <h2><strong>Hobbies</strong></h2>
            <ul>
                {hobby.map((hobby, index) => (
                    <li id={hobby} key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    )
}

export default Hobbies
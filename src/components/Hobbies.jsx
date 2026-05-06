
function Hobbies({ hobby }) {

    return (
        <div className="hobby">
            <ul>
                {hobby.map((hobby, index) => (
                    <li id={hobby} key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    )
}

export default Hobbies
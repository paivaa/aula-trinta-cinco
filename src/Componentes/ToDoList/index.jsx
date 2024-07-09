import { useState } from "react";

const ToDoList = () =>{
    let [toDo, setToDo ] = useState([]);
    let [texto, setTexto ] = useState('');

    function submitToDo(){
        setToDo([...toDo, texto]);
        setTexto('');
    }

    return (
        <>
        <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="digite seu toDo"></input>
        <br />
        <button onClick={submitToDo}>submit</button>
        <br />
        <ul>
            {toDo.map((p, i) => <li key={i}>{p}</li> )}
        </ul>
        </>
    )
}


export default ToDoList
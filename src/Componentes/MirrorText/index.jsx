import { useState } from "react"

const MirrorText = () => {
    let [texto, setTexto ] = useState('');

    function espelhaTexto(text){
        setTexto(text);

    }

    return (
        <>
        <textarea placeholder="Escreva e veja a mágica acontecer embaixo" cols={50} rows={10} onInput={(e) => espelhaTexto(e.target.value)}>
        </textarea>
        <br />
        <span>{texto}</span>
        </>
    )
}


export default MirrorText
import {useState} from 'react';

const ContadorApp= ()=>{

 const [contador, setContador] = useState(0);

    return (
        <>
        <h1>Contador</h1>
        <button onClick={()=>setContador(contador+1)} >Add +</button>
        <button onClick={()=>setContador(contador-1)} >Substract -</button>
        <p>Valor actual {contador}</p>
        </>
    );

}
export default ContadorApp;
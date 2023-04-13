import React, { useState } from 'react'

const Botones = () => {

    const [Result, setResult] = useState("")

    const HandleClick = (e) =>{
    e.preventDefault()

    setResult(Result.concat(e.target.name))
}

const Clear = (e) =>{
    e.preventDefault()

    setResult("")
}


const backSpace = () =>{
    setResult(Result.slice(0, Result.length - 1))
}

const calcute = () =>{
    try{
        setResult(eval(Result).toString())
    }
    catch{
        setResult("Error")
    }
    
}
return(
    <div className='container'>
        <div>
        <form>
            <input type="text" id="input" value={Result} />
        </form>

        <div className="keypad">
            <button onClick={Clear} id="Clear" className='highLight'>Clear</button>
            <button onClick={backSpace } className='highLight'>C</button>
            <button name='/' onClick={HandleClick} className='highLight'>&divide;</button>
            <button name="7" onClick={HandleClick}>7</button>
            <button name="8" onClick={HandleClick}>8</button>
            <button name="9" onClick={HandleClick}>9</button>
            <button name="*" onClick={HandleClick} className='highLight'>&times;</button>
            <button name="4" onClick={HandleClick}>4</button>
            <button name="5" onClick={HandleClick}>5</button>
            <button name="6" onClick={HandleClick}>6</button>
            <button name="-" onClick={HandleClick} className='highLight'>&ndash;</button>
            <button name="1" onClick={HandleClick}>1</button>
            <button name="2" onClick={HandleClick}>2</button>
            <button name="3" onClick={HandleClick}>3</button>
            <button name="+" onClick={HandleClick} className='highLight'>+</button>
            <button name='0' onClick={HandleClick}>0</button>
            <button name="." onClick={HandleClick}>.</button>
            <button onClick={calcute} id="result" className='highLight'>=</button>
        </div>
        </div>

    </div>
)
}
export default Botones
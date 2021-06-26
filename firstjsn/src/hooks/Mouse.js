import React,{useState,useEffect} from 'react'
import Formhk from './Formhk'

function Mouse() {

    const [x, setx] = useState(1)
    const [y, sety] = useState(1)
    const [isal, setisal] = useState(false)

    const logmouse=(e)=>{
        console.log('mouse event')
        if(e.clientX==0){
            setisal(true)
        }
        setx(e.clientX)
        sety(e.clientY)
    }

    useEffect(() => {
        console.log('effect calledd')
        window.addEventListener('mousemove',logmouse)
    },[])

    return (
        <div>
            <h1> X-{x}....Y-{y} </h1>
            {isal && <Formhk nnn="hello guy" ks="heyaa"/>}
        </div>
    )
}

export default Mouse

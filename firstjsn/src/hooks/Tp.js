import React,{useEffect} from 'react'

function Tp() {

    useEffect(() => {
        const script = document.createElement("script");
        script.async = true;
        script.src = "./../../public/aaa.js";
        document.getElementById('lan').appendChild(script);
        console.log('jsn')
    }, [])

    return (
        <div id="lan">
            <button id="paltan" >Button click</button>
        </div>
    )
}

export default Tp

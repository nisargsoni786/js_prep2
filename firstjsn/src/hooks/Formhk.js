import React, { useState,useEffect } from 'react'

function Formhk(props) {

    const [name,setname]=useState('');
    const [subject, setsubject] = useState('');
    const [body, setbody] = useState('');

    useEffect(() => {
        return () => {
            let d=document.getElementById('kkk').innerHTML;
            if(d=="hey" ){
                document.getElementById('kkk').innerHTML="hello"
            }
            else{
                document.getElementById('kkk').innerHTML="hey"
            }
        }
    },[name])



    const subb=(event)=>{
        console.log(`${name} ${subject} ${body}`)
        event.preventDefault();
    }

    const changename=(e)=>{
        setname(e.target.value)
        console.log(name+' '+e.target.value)
    }
    const changesubject=(e)=>{
        setsubject(e.target.value)
        console.log(subject+' '+e.target.value)
    }
    const changebody=(e)=>{
        setbody(e.target.value)
        console.log(body+' '+e.target.value)
    }
    

    return (
        <div>
            <h1 id="kkk">hello</h1>
            <form onSubmit={subb}>
                <div>
                    <label>Name</label>
                    <input value={name} onChange={(e)=> setname(e.target.value)} name='name'/>
                </div>
                <div>
                    <label>SUBJECT</label>
                    <input value={subject} onChange={changesubject} name='subject'/>
                </div>
                <div>
                    <label>BODY</label>
                    <input value={body} onChange={changebody} name='body'/>
                </div>
                <button type='submit'>SUBMIT</button>
            </form>
        </div>
    )
}

export default Formhk

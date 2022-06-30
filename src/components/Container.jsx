import { useState } from "react"

import { Title } from "./Title"
import { Signature } from "./Signature"
import { Form } from "./Form"

export const Container = ()=>{
    const [userData, setUserData] = useState({name:"",email:"",phone:"",ddd:""})
    return(
    <div id="pageContainer">
        <Title/>
        <Form setUserData={setUserData} />
        <div id="signatureContainer">
        <Signature userData={userData}/>
        </div>
    </div>
    )
}